import environment from '../config/environment';
import logger from '../helpers/logger';
import router from './index';

/**
 * @swagger
 * /android:
 *   get:
 *    summary: Returns the latest android APK for the Vorlesungsplan+ App.
 *    responses:
 *      "200":
 *        description: A JSON array of events or empty array if an error occurred.
 *        content:
 *          "application/vnd.android.package-archive":
 *            schema:
 *              type: string
 *              format: binary
 *      "500":
 *        description: Error message when APK could not be served by the API.
 *        content:
 *          "text/plain":
 *            schema:
 *              type: string
 */
router.get('/android', (req, res) => {
  logger.log('Request to /android');

  res.sendFile(environment.apps.android.filePath, (err) => {
    if (err) {
      logger.error(err);
      res.status(500).send('Error while serving Android APK.');
    }
  });
});

/**
 * @swagger
 * /android/version:
 *   get:
 *    summary: Returns the version of the latest android APK for the Vorlesungsplan+ App.
 *    responses:
 *      "200":
 *        content:
 *          "application/json":
 *            schema:
 *              $ref: "#/components/schemas/AppVersion"
 */
router.get('/android/version', (req, res) => {
  logger.log('Request to /android/version');
  res.send({ version: environment.apps.android.version });
});
