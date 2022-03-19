import axios from "axios";
import environment from "../config/environment";
import { cache, CacheKey } from "../helpers/cache";

/**
 * Fetches all available courses at the DHBW. Uses cached data if possible.
 *
 * @returns Available course names or empty array if an error occurred.
 */
export const fetchCourses = async (): Promise<string[]> => {
  const cachedCourses = (await cache.get(CacheKey.COURSES)) as string[] | undefined;
  if (cachedCourses) return cachedCourses;

  try {
    const { data } = await axios.get<string[]>(`${environment.stuvApiHost}/courses`);

    if (!Array.isArray(data) || (data.length > 0 && typeof data[0] !== "string")) {
      console.error("Response of StuV API for courses is not an string array.");
      return [];
    }

    // update in background (dont await it)
    cache.set(CacheKey.COURSES, data, environment.cache.coursesDuration);
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
