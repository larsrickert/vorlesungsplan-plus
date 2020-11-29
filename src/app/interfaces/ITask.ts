import { IBlockable } from './IBlock';

export interface ITask extends IBlockable {
  id: string;
  name: string;
  start: Date;
  end: Date;
  lecture: string;
  notes?: string;
}
