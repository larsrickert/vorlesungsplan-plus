import { CorsOptions } from 'cors';
import { Options } from 'swagger-jsdoc';

export interface IConfig {
  app: {
    /** Port to run the server on. */
    port: number;
    cors: CorsOptions;
    swagger: Options;
  };
  logger: {
    /** Max size of the log file in bytes */
    maxSize: number;
  };
  cache: {
    /** Time in ms to cache courses. */
    courses: number;
    /** Time in ms to cache lectures. */
    lectures: number;
    /** Time in ms to cache events. */
    events: number;
  };
  stuv: {
    apiHost: string;
  };
  apps: {
    ios: {
      widget: {
        version: string;
        filePath: string;
      };
    };
  };
}
