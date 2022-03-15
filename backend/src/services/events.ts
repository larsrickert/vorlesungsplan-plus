import { async as ical, CalendarComponent } from "node-ical";
import { cache, CacheKey } from "./cache";
import environment from "../config/environment";

interface IEvent {
  id: string;
  name: string;
  description: string;
  start: Date;
  end: Date;
  lastModified: Date;
  location: string;
}

function mapEvents(events: CalendarComponent[]): IEvent[] {
  const filtered = events.filter((e) => e.type === "VEVENT");

  return filtered.map((e) => {
    return {
      id: (e.uid as string) ?? "",
      name: (e.summary as string) ?? "",
      description: (e.description as string) ?? "",
      start: new Date(e.start as string),
      end: new Date(e.end as string),
      lastModified: new Date(e.lastmodified as string),
      location: (e.location as string) ?? "",
    };
  });
}

/**
 *
 *
 * @returns
 */
export const fetchEvents = async (): Promise<IEvent[]> => {
  const cachedEvents = (await cache.get(CacheKey.EVENTS)) as IEvent[] | undefined;
  if (cachedEvents) {
    for (let i = 0; i < cachedEvents.length; i++) {
      const e = cachedEvents[i];
      e.start = new Date(e.start);
      e.end = new Date(e.end);
      e.lastModified = new Date(e.lastModified);
    }
    return cachedEvents;
  }

  try {
    const events = Object.values(
      await ical.fromURL(
        "https://www.google.com/calendar/ical/asta.dhbw.de_08mkcuqcrppq8cg8vlutdsgpjg%40group.calendar.google.com/public/basic.ics"
      )
    );

    const mapped = mapEvents(events).sort((a, b) => a.start.getTime() - b.start.getTime());

    // update in background (dont await it)
    cache.set(CacheKey.EVENTS, mapped, environment.cache.eventsDuration);
    return mapped;
  } catch (e) {
    console.error(e);
    return [];
  }
};
