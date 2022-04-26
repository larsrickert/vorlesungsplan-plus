import {
  ApiLecture,
  DayLectureBlock,
  Lecture,
  LectureStatus,
  MergedLecture,
} from '../types/lectures';

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
  const sorted = lectures
    .slice()
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  const merged: MergedLecture[] = [];

  for (let i = 0; i < sorted.length; i++) {
    if (i + 1 < sorted.length && isSameLectureContent(sorted[i], sorted[i + 1])) {
      // lectures have same content, two cases:
      const lastMerged = merged.length ? merged[merged.length - 1] : null;
      const a = sorted[i];
      const b = sorted[i + 1];

      if (!lastMerged?.ids.includes(a.id)) {
        // 1: first was not already added to merged
        merged.push({
          ids: [a.id, b.id],
          courses: a.course === b.course ? [a.course] : [a.course, b.course],
          start: a.start,
          end: a.end,
          lecturer: a.lecturer,
          name: a.name,
          rooms: a.rooms,
          status: a.status,
          type: a.type,
          isExam: a.isExam || b.isExam,
        });
      } else {
        // 2: first was already added to merged
        if (!lastMerged.ids.includes(b.id)) lastMerged.ids.push(b.id);
        if (!lastMerged.courses.includes(b.course)) lastMerged.courses.push(b.course);
      }

      i++;
    } else {
      // current (i) and next (i+1) lecture dont have the same content
      const lecture = sorted[i];

      merged.push({
        ids: [lecture.id],
        courses: [lecture.course],
        start: lecture.start,
        end: lecture.end,
        lecturer: lecture.lecturer,
        name: lecture.name,
        rooms: lecture.rooms,
        status: lecture.status,
        type: lecture.type,
        isExam: lecture.isExam,
      });
    }
  }

  merged.forEach((lecture) => {
    lecture.ids.sort();
    lecture.courses.sort();
  });
  return merged;
}

function isSameLectureContent(a: ApiLecture, b: ApiLecture): boolean {
  if (a === b) return true;

  return (
    a.start === b.start &&
    a.end === b.end &&
    a.lecturer === b.lecturer &&
    a.name === b.name &&
    a.rooms.join(',') === b.rooms.join(',') &&
    a.type === b.type &&
    a.isExam === b.isExam
  );
}

function getLectureStatus(lecture: ApiLecture, previous: Lecture[]): LectureStatus {
  if (new Date(lecture.end).getTime() < Date.now()) return '';

  const inPrevious = previous.find((i) => i.id === lecture.id && isSameLectureContent(lecture, i));

  if (!inPrevious || inPrevious.status === 'removed') return 'added';
  return inPrevious.status;
}

export function mapLectures(lectures: ApiLecture[], cachedLectures?: Lecture[]): Lecture[] {
  const removedLectures: Lecture[] =
    cachedLectures
      ?.filter((lecture) => {
        return !lectures.find(
          (l) =>
            l.id === lecture.id && (isSameLectureContent(lecture, l) || lecture.status === 'added')
        );
      })
      .map((lecture) => {
        return { ...lecture, status: 'removed' };
      }) ?? [];

  let mapped: Lecture[] = lectures.map((lecture) => {
    return {
      ...lecture,
      status: cachedLectures ? getLectureStatus(lecture, cachedLectures) : '',
    };
  });

  mapped = mapped.concat(removedLectures);
  mapped.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
  return mapped;
}
