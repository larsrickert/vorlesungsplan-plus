import { useErrorStore } from '../store/error-handler';
import { CustomError } from '../types/errors';

export function isSameCustomError(a: CustomError | null, b: CustomError | null): boolean {
  if (!a || !b) return false;
  if (a === b) return true;
  return a.code === b.code && a.toString() === b.toString();
}

let promiseErrorListener: ((event: PromiseRejectionEvent) => void) | undefined;

/**
 * capture promise rejections.
 * @returns The event listener.
 */
export function registerPromiseErrorHandler(): void {
  if (promiseErrorListener) return;

  const errorStore = useErrorStore();

  promiseErrorListener = (event: PromiseRejectionEvent) => {
    // event.promise contains the promise object
    // event.reason contains the reason for the rejection
    const error =
      event.reason instanceof Error
        ? event.reason
        : new Error(`Uncaught promise rejection for: ${JSON.stringify(event.promise)}`);

    event.preventDefault();
    errorStore.handle(error);
  };

  window.addEventListener('unhandledrejection', promiseErrorListener);
}

let jsErrorListener: ((event: ErrorEvent) => void) | undefined;

/**
 * Capture the errors, which are outside of Vue instances. return true prevents the firing of the default event handler.
 */
export function registerJavaScriptErrorHandler(): void {
  if (jsErrorListener) return;

  const errorStore = useErrorStore();

  jsErrorListener = (event: ErrorEvent) => {
    if (!(event.error instanceof Error)) return;
    const error = event.error;
    event.preventDefault();

    if (!error) return false;
    errorStore.handle(error);

    return true;
  };

  window.addEventListener('error', jsErrorListener);
}

export function removeErrorHandlerListeners(): void {
  if (promiseErrorListener) window.removeEventListener('unhandledrejection', promiseErrorListener);
  if (jsErrorListener) window.removeEventListener('error', jsErrorListener);
}
