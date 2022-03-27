import { RequestHandler } from 'express';
import { fetchEvents } from '../controllers/events.controllers';

/**
 * @swagger
 * /events:
 *   get:
 *    summary: Returns a list of events for the DHBW Mosbach.
 *    description: Data will be cached for 30 minutes. Events are extracted from the google calendar (https://www.google.com/calendar/ical/asta.dhbw.de_08mkcuqcrppq8cg8vlutdsgpjg%40group.calendar.google.com/public/basic.ics).
 *    parameters:
 *      - name: excludePast
 *        in: query
 *        description: Whether to filter out past events.
 *        schema:
 *          type: boolean
 *    responses:
 *      "200":
 *        description: A JSON array of events or empty array if an error occurred.
 *        content:
 *          "application/json":
 *            schema:
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Event"
 */
export const eventsRouteGetHandler: RequestHandler = async (req, res) => {
  let events = await fetchEvents();

  if (req.query.excludePast && req.query.excludePast === 'true') {
    events = events.filter((e) => e.end.getTime() > Date.now());
  }

  res.send(events);
};
