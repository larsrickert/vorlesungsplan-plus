import { ILoggerConfig } from '../types/config';

const loggerConfig: ILoggerConfig = {
  dir: './logs/',
  logFile: 'log.txt',
  errorFile: 'error_log.txt',
  maxSize: 1024 * 1024 * 2, // 2 MB
};

export default loggerConfig;
