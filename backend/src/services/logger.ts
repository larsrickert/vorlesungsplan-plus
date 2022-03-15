import loggerConfig from "../config/logger";
import { appendFile, mkdir, stat, unlink } from "fs/promises";

class Logger {
  /**
   * Appends the given message to the file with the given name inside the logger dir. Creates logger dir if it does
   * not exist. Will delete log file if its size exceeds the configured max size.
   *
   * @param message Message to append.
   * @param fileName Filename inside logger directory to append the message to.
   */
  private static async appendToFile(message: string, fileName: string): Promise<void> {
    try {
      await mkdir(loggerConfig.dir, { recursive: true });
      const path = `${loggerConfig.dir}${fileName}`;
      await appendFile(path, `${message}\n`);

      const { size } = await stat(path);
      if (size > loggerConfig.maxSize) await unlink(path);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Logs a message to the console and log file.
   * @param message Message to log.
   */
  log(message: string): void {
    const msg = this.addTimestamp(message);

    console.log(msg);
    Logger.appendToFile(msg, loggerConfig.logFile);
  }

  /**
   * Logs a message as error to the console and log file.
   * @param message Message or Error to log.
   */
  error(message: string | Error): void {
    let msg = message instanceof Error ? message.message : message;
    msg = `***ERROR*** ${msg} ***ERROR***`;
    msg = this.addTimestamp(msg);

    console.log(msg);
    Logger.appendToFile(msg, loggerConfig.errorFile);
  }

  private addTimestamp(message: string): string {
    return `[${new Date().toUTCString()}]: ${message}`;
  }
}

export default new Logger();
