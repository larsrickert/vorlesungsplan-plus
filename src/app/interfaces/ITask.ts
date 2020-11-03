import { IBlockable } from './IBlock';

export interface ITask extends IBlockable {
  id: string;
  name: string;
  start: Date;
  end: Date;
  course: string;
  notes?: string;
}
