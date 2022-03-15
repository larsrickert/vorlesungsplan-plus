import { async as ical, CalendarComponent } from "node-ical";
import environment from "../../config/environment";
import { ILecture } from "../../types/courses-and-lectures";
import { cache } from "../cache";

export async function fetchLectures(course: string): Promise<ILecture[]> {
  const cachedCourses = (await cache.get(course)) as ILecture[] | undefined;
  if (cachedCourses) {
    for (let i = 0; i < cachedCourses.length; i++) {
      const c = cachedCourses[i];
      c.start = new Date(c.start);
      c.end = new Date(c.end);
    }
    return cachedCourses;
  }

  try {
    const events = Object.values(
      await ical.fromURL(`https://stuff.siphalor.de/dhbw/icalnigma/${course.toLowerCase()}.ics`)
    );

    const lectures = mapCalendarLectures(events).sort((a, b) => a.start.getTime() - b.start.getTime());

    // update in background (dont await it)
    cache.set(course, lectures, environment.cache.lecturesDuration);
    return lectures;
  } catch (e) {
    console.error(`Error while fetching lectures from siphalor for course "${course}""`, e);
    return [];
  }
}

function mapCalendarLectures(lectures: CalendarComponent[]): ILecture[] {
  const filtered = lectures.filter((e) => e.type === "VEVENT");

  return filtered.map((l) => {
    const lecturerMatches = (l.description?.toString() ?? "").match(/Dozent: ([\s\S]*?)\n/);
    const lecturer = lecturerMatches ? lecturerMatches[0]?.replace("Dozent: ", "").replace("\n", "") ?? "" : "";

    return {
      uid: l.uid as string,
      start: new Date(l.start as unknown as string),
      end: new Date(l.end as unknown as string),
      lastModified: l.dtstamp ? new Date(l.dtstamp as unknown as string) : new Date(),
      lecturer,
      name: (l.summary as string) ?? "",
      room: (l.location as string) ?? "",
    };
  });
}
