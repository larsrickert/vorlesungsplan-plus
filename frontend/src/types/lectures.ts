export interface Lecture {
  id: number;
  start: string;
  end: string;
  name: string;
  type: LectureType;
  lecturer: string;
  rooms: string[];
  course: string;
  status: LectureStatus;
  isExam: boolean;
}

export type LectureType = 'PRESENCE' | 'ONLINE' | 'HOLIDAY';
export type LectureStatus = 'added' | 'removed' | '';

export type ApiLecture = Omit<Lecture, 'status'>;
export type MergedLecture = Omit<Lecture, 'course' | 'id'> & { courses: string[]; ids: number[] };

export interface DayLectureBlock {
  date: Date;
  lectures: MergedLecture[];
}
