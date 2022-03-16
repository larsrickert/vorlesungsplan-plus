import { DayLectureBlock, Lecture, MergedLecture } from '../types/lectures';

export function createLectureBlocks(lectures: MergedLecture[]): DayLectureBlock[] {
  const map = new Map<number, MergedLecture[]>();

  lectures.forEach((lecture) => {
    const date = new Date(lecture.start);
    date.setHours(0, 0, 0, 0);

    const currentValue = map.get(date.getTime()) ?? [];
    currentValue.push(lecture);
    map.set(date.getTime(), currentValue);
  });

  const blocks: DayLectureBlock[] = [];

  map.forEach((value, key) => {
    blocks.push({ date: new Date(key), lectures: value });
  });

  return blocks;
}

export function mergeAndSortSameLectures(lectures: Lecture[]): MergedLecture[] {
  const sorted = lectures.slice().sort((a, b) => a.start.getTime() - b.start.getTime());

  const merged: MergedLecture[] = [];

  for (let i = 0; i < sorted.length; i++) {
    if (i + 1 < sorted.length && isSameLectureContent(sorted[i], sorted[i + 1])) {
      // lectures have same content, two cases:
      const lastMerged = merged.length ? merged[merged.length - 1] : null;
      const a = sorted[i];
      const b = sorted[i + 1];

      if (!lastMerged?.uids.includes(a.uid)) {
        // 1: first was not already added to merged
        merged.push({
          uids: [a.uid, b.uid],
          courses: a.course === b.course ? [a.course] : [a.course, b.course],
          start: a.start,
          end: a.end,
          lecturer: a.lecturer,
          name: a.name,
          room: a.room,
        });
      } else {
        // 2: first was already added to merged
        if (!lastMerged.uids.includes(b.uid)) lastMerged.uids.push(b.uid);
        if (!lastMerged.courses.includes(b.course)) lastMerged.uids.push(b.course);
      }

      i++;
    } else {
      // current (i) and next (i+1) lecture dont have the same content
      merged.push({
        uids: [sorted[i].uid],
        courses: [sorted[i].course],
        start: sorted[i].start,
        end: sorted[i].end,
        lecturer: sorted[i].lecturer,
        name: sorted[i].name,
        room: sorted[i].room,
      });
    }
  }

  merged.forEach((lecture) => lecture.courses.sort());
  return merged;
}

function isSameLectureContent(a: Lecture, b: Lecture): boolean {
  if (a === b) return true;

  return (
    a.start.getTime() === b.start.getTime() &&
    a.end.getTime() === b.end.getTime() &&
    a.lecturer === b.lecturer &&
    a.name === b.name &&
    a.room === b.room
  );
}

export function isExam(lecture: MergedLecture): boolean {
  return lecture.name.toLowerCase().includes('klausur');
}