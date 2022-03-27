import { RequestHandler } from 'express';
import path from 'path';
import { logger } from '../app';
import config from '../config';

/**
 * @swagger
 * /ios/widget:
 *   get:
 *    summary: Returns the latest iOS Widget for the Vorlesungsplan+ App. Widget can be used with the scriptable iOS App.
 *    responses:
 *      "200":
 *        content:
 *          "application/json":
 *            schema:
 *              $ref: "#/components/schemas/ScriptableWidget"
 *      "500":
 *        description: Error message when the widget could not be served by the API.
 *        content:
 *          "application/json":
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Error message
 *              required:
 *                - message
 */
export const iosWidgetRouteGetHandler: RequestHandler = (_, res) => {
  const filename = path.basename(config.apps.ios.widget.filePath);

  res.download(
    config.apps.ios.widget.filePath,
    filename,
    {
      headers: { 'Content-Type': 'application/json' },
    },
    (err) => {
      if (err) {
        logger.error('Error while serving iOS Widget.', err);
        res.status(500).send({
          message: 'Error while serving iOS Widget. Could not find file.',
        });
      }
    }
  );
};

/**
 * @swagger
 * /ios/widget/version:
 *   get:
 *    summary: Returns the version of the latest iOS Widget for the Vorlesungsplan+ App
 *    responses:
 *      "200":
 *        content:
 *          "application/json":
 *            schema:
 *              type: object
 *              properties:
 *                version:
 *                  type: string
 *                  description: Widget version number
 *              required:
 *                - version
 */
export const iosWidgetVersionRouteGetHandler: RequestHandler = (_, res) => {
  res.send({ version: config.apps.ios.widget.version });
};
