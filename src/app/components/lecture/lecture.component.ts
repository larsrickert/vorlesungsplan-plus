import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ILecture, LectureStatus } from 'src/app/interfaces/ILecture';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss'],
})
export class LectureComponent implements OnInit, OnDestroy {
  @Input() lecture: ILecture;
  @Input() skeleton = false;
  @Input() isLast = false;

  progress = false;
  progressValue = 0;
  intervall = null;

  statusAdded = LectureStatus.ADDED;
  statusRemoved = LectureStatus.REMOVED;

  constructor(public utility: UtilityService) {}

  ngOnInit() {
    if (!this.skeleton) {
      this.setProgress();

      // update progress bar every 10 seconds
      this.intervall = setInterval(() => {
        this.setProgress();
      }, 10 * 1000);
    }
  }

  // delete intervalls when routing to other page
  ngOnDestroy() {
    if (this.intervall) {
      clearInterval(this.intervall);
    }
  }

  private setProgress() {
    const now = new Date(Date.now());

    if (
      now.getTime() > this.lecture.start.getTime() &&
      now.getTime() < this.lecture.end.getTime()
    ) {
      this.progress = true;
      this.progressValue =
        (now.getTime() - this.lecture.start.getTime()) /
        (this.lecture.end.getTime() - this.lecture.start.getTime());
    }
  }
}
