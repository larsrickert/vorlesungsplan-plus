import router from '../router';

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

export function isToday(date: Date, offsetDays = 0): boolean {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() + offsetDays);
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  end.setDate(end.getDate() + offsetDays);

  return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
}

export async function navigate(href: string) {
  if (href.startsWith('mailto')) window.open(href, '_self');
  else if (href.startsWith('http')) window.open(href, '_blank');
  else await router.push(href);
}
