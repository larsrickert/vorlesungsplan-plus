import router from "../router";

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
  if (href.startsWith("mailto")) window.open(href, "_self");
  else if (href.startsWith("http")) window.open(href, "_blank");
  else await router.push(href);
}

export const randomColors = [
  "rgba(var(--ion-color-success-rgb), 0.8)",
  "var(--ion-color-tertiary)",
  "var(--ion-color-secondary)",
  "var(--ion-color-danger)",
  "var(--ion-color-primary)",
] as const;
let currentColorIndex = 0;
const colorMap: Record<string, (typeof randomColors)[number]> = {};

export function getRandomColor(key: string): (typeof randomColors)[number] {
  if (colorMap[key]) return colorMap[key];

  const color = randomColors[currentColorIndex];
  currentColorIndex = currentColorIndex < randomColors.length - 1 ? currentColorIndex + 1 : 0;
  colorMap[key] = color;

  return color;
}
