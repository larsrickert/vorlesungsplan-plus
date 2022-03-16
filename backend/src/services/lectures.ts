import axios from "axios";
import environment from "../config/environment";
import { ILecture, IStuvLecture } from "../types/courses-and-lectures";
import { cache } from "./cache";

const mapLectures = (lectures: IStuvLecture[]): ILecture[] => {
  return lectures.map((l) => {
    return {
      uid: l.id.toString(),
      start: new Date(l.startTime),
      end: new Date(l.endTime),
      room: l.rooms.join(", "),
      name: l.name,
      lecturer: l.lecturer,
      // course: l.course,
      lastModified: new Date(2021, 9, 6),
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
  if (cachedCourses) {
    for (let i = 0; i < cachedCourses.length; i++) {
      const c = cachedCourses[i];
      c.start = new Date(c.start);
      c.end = new Date(c.end);
    }
    return cachedCourses;
  }

  try {
    const { data } = await axios.get<IStuvLecture[]>(`${environment.stuvApiHost}/lectures/${course}`);

    let lectures: ILecture[];

    if (!Array.isArray(data)) {
      console.error(`Response of StuV API for ${course} lectures is not an array.`);
      return [];
    } else {
      lectures = mapLectures(data);
    }

    // update in background (dont await it)
    cache.set(course, lectures, environment.cache.lecturesDuration);
    return lectures;
  } catch (e) {
    console.error(e);
    return [];
  }
};
