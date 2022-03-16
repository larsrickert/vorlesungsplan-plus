export interface Lecture {
  uid: string;
  lecturer: string;
  name: string;
  room: string;
  start: Date;
  end: Date;
  course: string;
  status: LectureStatus;
}

export type LectureStatus = 'added' | 'removed' | '';

export type ApiLecture = Omit<Lecture, 'start' | 'end' | 'course' | 'status'> & {
  start: string;
  end: string;
};
export type MergedLecture = Omit<Lecture, 'course' | 'uid'> & { courses: string[]; uids: string[] };

export interface DayLectureBlock {
  date: Date;
  lectures: MergedLecture[];
}
