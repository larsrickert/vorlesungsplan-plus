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
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerJSDoc(config.app.swagger))
);

export const logger = createLogger();

// routes have to been registered before middleware
export const router = express.Router();
require('./routes');
app.use(router);

// middleware
router.use(loggerMiddleware);
router.use(errorMiddleware);

app.listen(config.app.port, () =>
  console.log(`Running on http://localhost:${config.app.port}`)
);
