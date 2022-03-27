export interface Logger {
  log(message: string): Promise<void>;
  error(message: string, error?: Error): Promise<void>;
  debug(message: string): Promise<void>;
}
