import { ILecture } from './ILecture';

export interface IBlock {
  date: Date;
  items: IBlockable[];
}

export interface IBlockable {
  start: Date;
  end: Date;
}

export interface ILectureBlock extends IBlock {
  items: ILecture[];
}
