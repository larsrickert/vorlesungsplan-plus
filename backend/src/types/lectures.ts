export const lectureTypes = ['PRESENCE', 'ONLINE'] as const;
export type LectureType = typeof lectureTypes[number];

export interface IStuVLecture {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  name: string;
  type: LectureType;
  /** Lecturer is currently empty due to data privacy reasons. */
  lecturer: string;
  rooms: string[];
  course: string;
}

export interface ILecture {
  id: number;
  start: string;
  end: string;
  name: string;
  type: LectureType;
  /** Lecturer is currently empty due to data privacy reasons. */
  lecturer: string;
  rooms: string[];
  course: string;
  isExam: boolean;
}
