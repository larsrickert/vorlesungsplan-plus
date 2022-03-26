export function isValidDate(d: unknown): boolean {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return d instanceof Date && !isNaN(d as any);
}

export function getEndOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 11, 31, 23, 59, 59, 999);
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
