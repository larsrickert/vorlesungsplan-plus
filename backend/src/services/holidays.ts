import axios from 'axios';
import { logger } from '../server';
import { ApiHolidays, Holiday } from '../types/holidays';
import { cache, CacheKey } from '../utils/cache';
import { getEndOfYear, isSameDay, isValidDate } from '../utils/dates';

export async function isHoliday(date: Date): Promise<boolean> {
  if (!isValidDate(date)) return false;

  const holidays = await fetchHolidays(date.getFullYear());
  return !!holidays.find((h) => isSameDay(date, new Date(h.date)));
}

export async function fetchHolidays(year: number): Promise<Holiday[]> {
  const cachedHolidays = (await cache.get(`${CacheKey.HOLIDAYS}_${year}`)) as
    | Holiday[]
    | undefined;
  if (cachedHolidays) return cachedHolidays;

  try {
    const { data } = await axios.get<ApiHolidays>(
      `https://feiertage-api.de/api/?jahr=${year}&nur_land=BW`
    );
    if (!data || typeof data !== 'object') return [];

    const holidays = mapHolidays(data);
    if (!holidays.length) return [];

    // cache in background (dont await it)
    const now = new Date();
    const ttl =
      year >= now.getFullYear()
        ? getEndOfYear(now).getTime() - now.getTime()
        : undefined;
    cache.set(`${CacheKey.HOLIDAYS}_${year}`, holidays, ttl);

    return holidays;
  } catch (e) {
    logger.error('Error while fetching holidays', e);
    return [];
  }
}

function mapHolidays(holidays: ApiHolidays): Holiday[] {
  const mapped: Holiday[] = [];

  for (const [key, value] of Object.entries(holidays)) {
    if (typeof key !== 'string' || !value || typeof value !== 'object') {
      continue;
    }

    const date = new Date(value.datum);
    if (!isValidDate(date)) continue;

    mapped.push({
      name: key,
      date: date.toISOString(),
      comment: value.hinweis ?? '',
    });
  }

  mapped.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  return mapped;
}
