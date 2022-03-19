export interface ICacheConfig {
  /**
   * Time in ms to cache courses.
   */
  coursesDuration: number;
  /**
   * Time in ms to cache lectures.
   */
  lecturesDuration: number;
  /**
   * Time in ms to cache events.
   */
  eventsDuration: number;
}

export interface IAppConfig {
  ios: {
    widget: {
      version: string;
      filePath: string;
    };
  };
}

export interface IEnvironment {
  /**
   * Port to run the server on.
   */
  port: number;
  cache: ICacheConfig;
  stuvApiHost: string;
  calendarListHost: string;
  apps: IAppConfig;
}

export interface ILoggerConfig {
  /**
   * Path to the directory where log files should be stored. Includes trailing slash.
   */
  dir: string;
  /**
   * Filename for default logs.
   */
  logFile: string;
  /**
   * Filename for error logs.
   */
  errorFile: string;
  /**
   * Max file size for the logger file in bytes.
   */
  maxSize: number;
}
