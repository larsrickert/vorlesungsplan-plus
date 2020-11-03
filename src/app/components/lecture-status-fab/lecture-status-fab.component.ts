import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-lecture-status-fab',
  templateUrl: './lecture-status-fab.component.html',
  styleUrls: ['./lecture-status-fab.component.scss'],
})
export class LectureStatusFabComponent implements OnInit {
  @Input() skeleton = false;
  hasChanges = false;

  constructor(
    private storage: StorageService,
    private utility: UtilityService
  ) {}

  ngOnInit() {
    if (!this.skeleton) {
      this.storage.lectures.subscribe((lectures) => {
        this.hasChanges = this.utility.hasChanges(lectures);
      });
    }
  }

  async clearChanges(): Promise<void> {
    if (!this.skeleton) {
      await this.storage.resetStatus();
    }
  }
}
