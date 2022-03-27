import axios from 'axios';
import { logger } from '../app';
import config from '../config';
import { cache, CacheKey } from '../utils/cache';

/**
 * Fetches all available courses at the DHBW. Uses cached data if possible.
 *
 * @returns Available course names or empty array if an error occurred.
 */
export const fetchCourses = async (): Promise<string[]> => {
  const cachedCourses = (await cache.get(CacheKey.COURSES)) as
    | string[]
    | undefined;
  if (cachedCourses) return cachedCourses;

  try {
    const { data } = await axios.get<string[]>(
      `${config.stuv.apiHost}/courses`
    );

    if (
      !Array.isArray(data) ||
      (data.length > 0 && typeof data[0] !== 'string')
    ) {
      logger.error('Response of StuV API for courses is not an string array.');
      return [];
    }

    // update in background (dont await it)
    cache.set(CacheKey.COURSES, data, config.cache.courses);
    return data;
  } catch (e) {
    logger.error('Error while fetching courses.', e as Error);
    return [];
  }
};
