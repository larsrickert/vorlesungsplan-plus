import { router } from '../server';
import { fetchLectures } from '../services/lectures';

/**
 * @swagger
 * /lectures/{course}:
 *   get:
 *    summary: Returns a list of lectures for the course with the given name.
 *    description: Data will be cached for 10 minutes to prevent overuse of the API. Fetched from the StuV API (https://api.stuv.app/rapla/lectures/{COURSE}).
 *    parameters:
 *      - name: course
 *        in: path
 *        required: true
 *        description: The course name to get the lectures for.
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: A JSON array of lectures or empty array if an error occurred.
 *        content:
 *          "application/json":
 *            schema:
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Lecture"
 */
router.get('/lectures/:id', async (req, res) => {
  const lectures = await fetchLectures(req.params.id);

  if (req.query.excludePast === 'true') {
    res.send(lectures.filter((l) => new Date(l.end).getTime() > Date.now()));
  } else res.send(lectures);
});