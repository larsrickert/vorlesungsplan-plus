import { IEvent } from './IEvent';
import { ILecture } from './ILecture';
import { ITask } from './ITask';

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

export interface IEventBlock extends IBlock {
  items: IEvent[];
}

export interface ITaskBlock extends IBlock {
  items: ITask[];
}
