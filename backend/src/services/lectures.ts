import axios from 'axios';
import config from '../config';
import { logger } from '../server';
import { ILecture, IStuVLecture } from '../types/lectures';
import { cache } from '../utils/cache';

function isExam(lecture: IStuVLecture): boolean {
  const name = lecture.name.toLowerCase();
  if (['klausureinsicht', 'klausurvorbereitung'].some((i) => name.includes(i)))
    return false;
  return name.includes('klausur');
}

const mapLectures = (lectures: IStuVLecture[]): ILecture[] => {
  return lectures.map((l) => {
    return {
      id: l.id,
      start: l.startTime,
      end: l.endTime,
      rooms: l.rooms,
      name: l.name,
      lecturer: l.lecturer,
      course: l.course,
      type: l.type || 'PRESENCE',
      isExam: isExam(l),
    };
  });
};

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
    const lectures: ILecture[] = Array.isArray(data) ? mapLectures(data) : [];

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
