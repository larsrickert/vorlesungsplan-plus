import { RequestHandler } from 'express';
import { logger } from '../server';

/**
 * Creates a debug log for every route that is accessed
 */
const loggerMiddleware: RequestHandler = (req, _, next) => {
  logger.log(`Request to route "${req.path}"`);
  next();
};

export default loggerMiddleware;
