import cors from 'cors';
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import config from './config';
import errorMiddleware from './middleware/errors';
import loggerMiddleware from './middleware/logger';
import { createLogger } from './utils/logger';

const app = express();
app.use(cors(config.app.cors));

export const logger = createLogger();
export const router = express.Router();
app.use(router);

router.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerJSDoc(config.app.swagger))
);

// middleware (has to be registered before routes)
router.use(loggerMiddleware);

require('./routes');

app.listen(config.app.port, () =>
  console.log(`Running on http://localhost:${config.app.port}`)
);

// error middleware must be registered at the end
router.use(errorMiddleware);
