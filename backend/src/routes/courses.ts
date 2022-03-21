import { router } from '../server';
import { fetchCourses } from '../services/courses';

/**
 * @swagger
 * /courses:
 *   get:
 *    summary: Returns a list of all available course names.
 *    description: Data will be cached for 1 day to prevent overuse of the DHBW API. Fetched from the StuV API (https://api.stuv.app/rapla/courses).
 *    responses:
 *      "200":
 *        description: A JSON array of course names or empty array if an error occurred.
 *        content:
 *          "application/json":
 *            schema:
 *              type: array
 *              items:
 *                type: string
 */
router.get('/courses', async (req, res) => {
  const courses: string[] = await fetchCourses();
  res.send(courses);
});
