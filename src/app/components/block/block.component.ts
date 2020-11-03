import { Component, Input, OnInit } from '@angular/core';
import {
  IBlock,
  IEventBlock,
  ILectureBlock,
  ITaskBlock,
} from 'src/app/interfaces/IBlock';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {
  @Input() block: IBlock;
  @Input() skeleton: string;
  @Input() disabled = false;

  now = new Date(Date.now());
  lectureBlock = false;
  eventBlock = false;
  taskBlock = false;
  dateString = null;

  constructor(public utility: UtilityService) {}

  ngOnInit() {
    if (this.block && this.block.items) {
      this.lectureBlock = this.isLectureBlock(this.block);
      this.eventBlock = this.isEventBlock(this.block);
      this.taskBlock = this.isTaskBlock(this.block);

      this.dateString = this.blockDateToString();
    }
  }

  // returns whether or not arg is Interface ILectureBlock
  private isLectureBlock(arg: any): arg is ILectureBlock {
    const block: ILectureBlock = {
      date: null,
      items: [
        {
          uid: null,
          lecturer: null,
          name: null,
          room: null,
          lastModified: null,
          start: null,
          end: null,
          status: null,
        },
      ],
    };

    const neededKeys = Object.keys(block.items[0]);
    const hasKeys = Object.keys(this.block.items[0]);

    if (!hasKeys.includes('status')) {
      hasKeys.push('status');
    }

    return JSON.stringify(neededKeys.sort()) === JSON.stringify(hasKeys.sort());
  }

  // returns whether or not arg is Interface IEventBlock
  private isEventBlock(arg: any): arg is IEventBlock {
    const block: IEventBlock = {
      date: null,
      items: [
        {
          id: null,
          name: null,
          description: null,
          start: null,
          end: null,
          status: null,
          location: null,
        },
      ],
    };

    const neededKeys = Object.keys(block.items[0]);
    const hasKeys = Object.keys(this.block.items[0]);

    return JSON.stringify(neededKeys.sort()) === JSON.stringify(hasKeys.sort());
  }

  // returns whether or not arg is Interface IEventBlock
  private isTaskBlock(arg: any): arg is ITaskBlock {
    const block: ITaskBlock = {
      date: null,
      items: [
        {
          id: null,
          name: null,
          start: new Date(),
          end: new Date(),
          course: null,
          notes: null,
        },
      ],
    };

    const neededKeys = Object.keys(block.items[0]);
    const hasKeys = Object.keys(this.block.items[0]);

    if (!hasKeys.includes('notes')) {
      hasKeys.push('notes');
    }

    return JSON.stringify(neededKeys.sort()) === JSON.stringify(hasKeys.sort());
  }

  private blockDateToString() {
    const now = new Date(Date.now());

    if (this.utility.isSameDay(this.block.date, now)) {
      return 'Heute';
    } else if (
      this.utility.isSameDay(
        this.utility.stripTimeFromDate(now, 1),
        this.block.date
      )
    ) {
      return 'Morgen';
    } else if (
      this.utility.isSameDay(
        this.utility.stripTimeFromDate(now, -1),
        this.block.date
      )
    ) {
      return 'Gestern';
    } else {
      return null;
    }
  }
}
