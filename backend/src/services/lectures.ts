import axios from 'axios';
import config from '../config';
import { logger } from '../server';
import {
  ILecture,
  IStuVLecture,
  LectureType,
  lectureTypes,
} from '../types/lectures';
import { cache } from '../utils/cache';
import { isHoliday } from './holidays';

/**
 * Keywords that the lecture name must contain to be classified as exam.
 * Only apply if `noExamIdentifiers` has no match.
 */
const examIdentifiers: readonly string[] = ['klausur', 'prüfung'] as const;

/** Keywords that explicitly specify that the given lecture name is not an exam. */
const noExamIdentifiers: readonly string[] = [
  'klausureinsicht',
  'klausurvorbereitung',
  'prüfungsvorbereitung',
] as const;

function isExam(lecture: IStuVLecture): boolean {
  const name = lecture.name.toLowerCase();
  if (noExamIdentifiers.some((i) => name.includes(i))) return false;
  return examIdentifiers.some((i) => name.includes(i));
}

async function getType(lecture: IStuVLecture): Promise<LectureType> {
  const type = lectureTypes.includes(lecture.type) ? lecture.type : 'PRESENCE';

  // StuV API classifies selbststudium as presence which is not correct
  if (
    lecture.name.toLowerCase().includes('selbststudium') &&
    !lecture.rooms.length
  ) {
    return 'ONLINE';
  }

  if (await isHoliday(new Date(lecture.startTime))) return 'HOLIDAY';
  return type;
}

async function mapLectures(lectures: IStuVLecture[]): Promise<ILecture[]> {
  const mapped: ILecture[] = [];

  for (const l of lectures) {
    mapped.push({
      id: l.id,
      start: l.startTime,
      end: l.endTime,
      rooms: l.rooms,
      name: l.name,
      lecturer: l.lecturer,
      course: l.course,
      type: await getType(l),
      isExam: isExam(l),
    });
  }

  return mapped;
}

/**
 * Fetches all available lectures for the given course. Uses cached data if possible.
 *
 * @returns All lectures for the given course or empty array if course invalid or error while fetching.
 */
export const fetchLectures = async (course: string): Promise<ILecture[]> => {
  course = course.toUpperCase();

  const cachedCourses = (await cache.get(course)) as ILecture[] | undefined;
  if (cachedCourses) return cachedCourses;

  try {
    const { data } = await axios.get<IStuVLecture[]>(
      `${config.stuv.apiHost}/lectures/${course}?archived=true`
    );
    const lectures: ILecture[] = Array.isArray(data)
      ? await mapLectures(data)
      : [];

    // update in background (dont await it)
    cache.set(course, lectures, config.cache.lectures);
    return lectures;
  } catch (e) {
    logger.error(
      `Error while fetching lectures for course "${course}".`,
      e as Error
    );
    return [];
  }
};
