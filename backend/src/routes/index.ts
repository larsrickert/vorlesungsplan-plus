import express from 'express';
import logger from '../helpers/logger';

const router = express.Router();
export default router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Lecture:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Unique lecture ID.
 *         start:
 *           type: string
 *           description: Lecture start date as date string.
 *         end:
 *           type: string
 *           description: Lecture end date as date string.
 *         rooms:
 *           type: array
 *           items:
 *             type: string
 *           description: Room or location names.
 *         name:
 *           type: string
 *           description: Lecture name.
 *         lecturer:
 *           type: string
 *           description: Name of the lecturer.
 *         course:
 *           type: string
 *           description: Course name this lecture belongs to.
 *         type:
 *           type: string
 *           enum: [PRESENCE, ONLINE]
 *           description: Type of the lecture (online or presence).
 *         isExam:
 *           type: boolean
 *           description: Whether this lecture is an exam. Will be false for exam reviews.
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique event ID.
 *         name:
 *           type: string
 *           description: Event name.
 *         description:
 *           type: string
 *           description: Event description. May contain HTML.
 *         location:
 *           type: string
 *           description: Event location.
 *         lastModified:
 *           type: string
 *           description: Last modified date as date string.
 *         start:
 *           type: string
 *           description: Event start date as date string.
 *         end:
 *           type: string
 *           description: End end date as date string.
 *     AppVersion:
 *       type: object
 *       properties:
 *         version:
 *           type: string
 *           description: App version number.
 *     ScriptableWidget:
 *       type: object
 *       properties:
 *         always_run_in_app:
 *           type: boolean
 *         icon:
 *           type: object
 *           properties:
 *            color:
 *              type: string
 *            glyph:
 *              type: string
 *         name:
 *           type: string
 *         script:
 *           type: string
 *         share_sheet_inputs:
 *           type: array
 *           items:
 *            type: string
 */

/**
 * @swagger
 * /:
 *   get:
 *    deprecated: true
 *    summary: Returns a list of courses or lectures.
 *    description: This route is deprecated. Please use /courses to get a list of courses and /lectures/{course} to get lectures for the given course. This path is currently still supported for backwards compatibility to the previous API version 1 (wrtitten in PHP).
 *    parameters:
 *      - name: course
 *        in: query
 *        description: Course name. If specified, a list of lectures for the given course will be returned. Filters out past lectures.
 *        schema:
 *          type: string
 *      - name: view
 *        in: query
 *        description: View mode. If set to "archive" only past lectures will be returned.
 *        schema:
 *          type: string
 *          enum:
 *            - archive
 *    responses:
 *      "200":
 *        description: A JSON array of courses if "course" query param is not set or a list of lectures for the given course otherwise. Returns an empty array if an error occurred.
 *        content:
 *          "application/json":
 *            schema:
 *              oneOf:
 *                - type: array
 *                  items:
 *                    type: string
 *                - type: array
 *                  items:
 *                    $ref: "#/components/schemas/Lecture"
 */
router.get('/', async (req, res) => {
  logger.log(`Request to route "/"`);

  if (req.query.course && typeof req.query.course === 'string') {
    const isArchiveView = req.query.view && req.query.view === 'archive';
    const queryParams = !isArchiveView ? '?excludePast=true' : '';

    res.redirect(301, `/lectures/${req.query.course}${queryParams}`);
  } else res.redirect(301, '/courses');
});

require('./courses');
require('./events');
require('./ios');
require('./lectures');
require('./mail');
require('./redirects');
