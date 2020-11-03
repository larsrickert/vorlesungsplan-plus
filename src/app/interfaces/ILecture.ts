import { IBlockable } from './IBlock';

export interface ILecture extends IBlockable {
  uid: string;
  lecturer: string;
  name: string;
  room: string;
  lastModified: Date;
  start: Date;
  end: Date;
  status?: LectureStatus;
}

export enum LectureStatus {
  ADDED = 'added',
  REMOVED = 'removed',
}
