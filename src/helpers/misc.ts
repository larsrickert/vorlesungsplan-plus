/**
 * Creates a timeout / delay.
 * @param ms Time in milliseconds before the promise should be resolved.
 * @returns Promise that resolves after the given time.
 */
export function getTimeout(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}
