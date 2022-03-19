import { readFile } from 'fs/promises';
import config from '../config';
import { logger, router } from '../server';

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
 *          "text/plain":
 *            schema:
 *              type: string
 */
router.get('/ios/widget', async (req, res) => {
  try {
    const widget = await readFile(config.apps.ios.widget.filePath);
    res.send(JSON.parse(widget.toString()));
  } catch (e) {
    logger.error('Error while serving iOS Widget.', e as Error);
    res.status(500).send('Error while serving iOS Widget.');
  }
});

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
 *              $ref: "#/components/schemas/AppVersion"
 */
router.get('/ios/widget/version', (req, res) => {
  logger.log('Request to /ios/widget/version');
  res.send({ version: config.apps.ios.widget.version });
});
