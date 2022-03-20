import { router } from '../server';

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

router.get('/', (req, res) => {
  res.status(404).send({
    message:
      'You tried to access the index route of the Vorlesungsplan+ API. This route does not provide any data. For available routes, please see API documentation on route /docs',
  });
});

require('./courses');
require('./events');
require('./ios');
require('./lectures');
