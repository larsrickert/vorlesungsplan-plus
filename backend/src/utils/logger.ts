import fs from "fs/promises";
import path from "path";
import { config, isProduction } from "../config";
import { Logger } from "../types/logger";

const logDir = path.join(__dirname, "../../logs/");
const textEncoder = new TextEncoder();

function getTimestamp(): string {
  return `[${new Date().toUTCString()}]`;
}

async function writeToLogFile(path: string, data: string) {
  try {
    await fs.mkdir(logDir, { recursive: true });

    try {
      const fileSize = (await fs.stat(path)).size;
      const dataSize = textEncoder.encode(data).length;

      if (fileSize + dataSize > config.logger.maxSize) {
        // log file size limit reached, clear file
        await fs.writeFile(
          path,
          `${getTimestamp()}: Log file exceeded max. size of ${
            config.logger.maxSize
          } bytes, cleared log file \n${data}`,
        );
      } else {
        // log file size not reached
        await fs.appendFile(path, data);
      }
    } catch (e) {
      // simply create log file if it does not exist
      await fs.appendFile(path, data);
    }
  } catch (e) {
    // do not throw error in logger, app should not crash when logging fails
    console.error(`Error while writing to log file ${path}`, e);
  }
}

export function createLogger(): Logger {
  const logFilePath = path.join(logDir, "logs.txt");
  const errorLogFilePath = path.join(logDir, "errors.txt");

  return {
    log: async (message) => {
      const msg = `${getTimestamp()}: ${message}`;
      console.log(msg);
      await writeToLogFile(logFilePath, `${msg}\n`);
    },
    error: async (message, error) => {
      let msg = `${getTimestamp()}: ***ERROR*** ${message}`;
      error ? console.error(msg, error) : console.error(msg);

      if (error) msg += `, ${error.stack || error.message}`;
      await writeToLogFile(errorLogFilePath, `${msg}\n`);
    },
    debug: async (message) => {
      if (isProduction) return;
      console.log(`${getTimestamp()}: ***DEBUG*** ${message}`);
    },
  };
}
