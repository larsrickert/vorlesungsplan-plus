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

export type LectureWithStringDate = Omit<Lecture, 'start' | 'end'> & {
  start: string;
  end: string;
};

export type ApiLecture = Omit<LectureWithStringDate, 'course' | 'status'>;
export type MergedLecture = Omit<Lecture, 'course' | 'uid'> & { courses: string[]; uids: string[] };

export interface DayLectureBlock {
  date: Date;
  lectures: MergedLecture[];
}
