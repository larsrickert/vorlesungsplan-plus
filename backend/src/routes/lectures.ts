import { fetchLectures } from "../services/lectures";
import logger from "../services/logger";
import router from "./index";

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
router.get("/lectures/:id", async (req, res) => {
  logger.log(`Request to /lectures/${req.params.id}`);

  // map old course name for INF19 from old API to new rapla course names
  if (req.params.id.toUpperCase() === "INF19A") req.params.id = "MOS-TINF19A";
  if (req.params.id.toUpperCase() === "INF19B") req.params.id = "MOS-TINF19B";
  if (req.params.id.toUpperCase() === "MGH-INF19") req.params.id = "MOS-TINF19B";

  const lectures = await fetchLectures(req.params.id);

  if (req.query.excludePast && req.query.excludePast === "true") {
    res.send(lectures.filter((l) => l.end.getTime() > Date.now()));
  } else res.send(lectures);
});
