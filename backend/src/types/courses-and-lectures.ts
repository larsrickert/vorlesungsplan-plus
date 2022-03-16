export interface IMosbachCalendarEntry {
  course: string;
  icsPath: string;
}

export interface IStuvLecture {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  name: string;
  type: string;
  lecturer: string;
  rooms: string[];
  course: string;
}

export interface ILecture {
  uid: string;
  lecturer: string;
  name: string;
  room: string;
  start: Date;
  end: Date;
  // course: string;
  /** For backwards compatibility with previous API version. */
  lastModified: Date;
}
