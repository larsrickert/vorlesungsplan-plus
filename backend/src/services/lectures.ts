import axios from "axios";
import environment from "../config/environment";
import { cache } from "../helpers/cache";
import { ILecture, IStuVLecture } from "../types/lectures";

function isExam(lecture: IStuVLecture): boolean {
  const name = lecture.name.toLowerCase();
  if (["klausureinsicht", "klausurvorbereitung"].some((i) => name.includes(i))) return false;
  return name.includes("klausur");
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
      type: l.type || "PRESENCE",
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
    const { data } = await axios.get<IStuVLecture[]>(`${environment.stuvApiHost}/lectures/${course}?archived=true`);
    const lectures: ILecture[] = Array.isArray(data) ? mapLectures(data) : [];

    // update in background (dont await it)
    cache.set(course, lectures, environment.cache.lecturesDuration);
    return lectures;
  } catch (e) {
    console.error(e);
    return [];
  }
};
