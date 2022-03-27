import { RequestHandler } from 'express';
import { logger } from '../app';

/**
 * Creates a debug log for every route that is accessed
 */
const loggerMiddleware: RequestHandler = (req, _, next) => {
  // do not log assets of swagger docs route
  if (
    req.path.startsWith('/docs') &&
    ['.css', '.js', '.png'].some((i) => req.path.endsWith(i))
  ) {
    next();
    return;
  }

  logger.log(`Request to route "${req.path}"`);
  next();
};

export default loggerMiddleware;
