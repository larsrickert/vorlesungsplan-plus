import { i18n } from '@/i18n';

export enum ErrorCode {
  UNKNOWN = 'A1',
  ROUTER_NOT_AUTHENTICATED = 'A2',
}

export class CustomError extends Error {
  /** The error message */
  public readonly message: string;

  /** Error code that uniquely identifies the error. */
  public readonly code: string;

  /** Expose the error to the user? */
  public expose = true;

  /** The original error */
  public readonly originalError?: Error;

  /** Constructor */
  public constructor(code: string, message: string, originalError?: Error) {
    super(message);
    this.name = 'CustomError';

    this.code = code;
    this.message = message;
    this.originalError = originalError;

    if (originalError?.stack) this.stack = originalError.stack;

    /**
     * Set the prototype explicitly
     * @see https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
     */
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  /** Generates a string representing the error */
  public toString(): string {
    const { code, message, originalError } = this;
    let original = '';
    try {
      if (originalError && Object.keys(originalError).length) {
        original = JSON.stringify(originalError);
      }
    } catch (e) {
      /* we don't want to cause an additional error when the original error object can not be stringified */
      console.warn(e);
    } finally {
      if (originalError?.message && !original.length) original = originalError.message;
    }

    const { t } = i18n.global;

    return `${t('global.errorCode')} ${code}: ${message}${original ? ' (' + original + ')' : ''}`;
  }
}
