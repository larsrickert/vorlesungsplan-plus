import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController, Platform } from '@ionic/angular';
import { ILectureBlock } from 'src/app/interfaces/IBlock';
import { LectureStatus } from 'src/app/interfaces/ILecture';
import { SettingKey } from 'src/app/interfaces/ISetting';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {
  @ViewChild('segment') segment: HTMLIonSegmentElement;
  @ViewChild('searchBar') searchBar: HTMLIonSearchbarElement;
  @ViewChild(IonContent, { read: IonContent, static: false })
  myContent: IonContent;
  isArchive = false;

  blocks: ILectureBlock[] = [];
  displayedBlocks: ILectureBlock[] = [];
  lastUpdated = null;
  course = '';

  // 0: lectures
  // 1: exams
  // 2: changes
  // 3: presence
  counts = [0, 0, 0, 0];
  hasChanges = false;

  constructor(
    private utility: UtilityService,
    private storage: StorageService
  ) {}

  ngOnInit() {
    const course = this.storage.getSetting(SettingKey.COURSE);
    this.course = course ? course : '';

    this.storage.lectures.subscribe((lectures) => {
      if (!this.isArchive) {
        this.blocks = <ILectureBlock[]>this.utility.createBlocks(lectures);
        this.displayedBlocks = this.blocks;
        this.lastUpdated = this.storage.getSetting(SettingKey.LASTUPDATED);
        this.count();
      }
    });

    this.storage.fetchLectures();
  }

  async triggerArchive(): Promise<void> {
    if (this.isArchive) {
      // disable archive
      this.isArchive = false;
      await this.storage.fetchLectures();
    } else {
      // load archive
      const loading = await this.utility.showLoading('Archiv wird geladen...');
      this.hasChanges = false;

      const lectures = await this.storage.fetchArchivedLectures();
      this.blocks = <ILectureBlock[]>this.utility.createBlocks(lectures);
      this.displayedBlocks = this.blocks;
      this.count();

      this.isArchive = true;
      await loading.dismiss();

      // auto scroll to newest lecture
      if (this.myContent) {
        setTimeout(() => {
          this.myContent.scrollToBottom(300);
        }, 100);
      }
    }

    // clear searchbar and set segment to all
    if (this.searchBar) {
      this.searchBar.value = '';
    }

    if (this.segment) {
      this.segment.value = 'all';
    }
  }

  async refresh(ev: any): Promise<void> {
    const fetched = await this.storage.fetchLectures();
    ev.target.complete();

    if (fetched) {
      this.utility.showToast('Vorlesungen aktualisiert.');
    } else {
      this.utility.showToast(
        'Die Vorlesungen konnten nicht aktualisiert werden. Bitte überprüfe deine Internetverbindung und Kurseinstellungen.'
      );
    }
  }

  // sets current displayed blocks to blocks that contain the searched value
  search(ev: any): void {
    let searchedValue = ev.target.value.toLowerCase();

    if (searchedValue === '') {
      // display blocks of active segment when search is canceled or cleared
      return this.setDisplayedBlocksToSegment();
    } else if (searchedValue.trim() === '') {
      // do nothing when empty search input is entered
      return;
    }

    searchedValue = searchedValue.trim();
    this.segment.value = 'all';

    const results: ILectureBlock[] = [];

    // add all blocks to results where lectures contain searched value in name, lecturer or room
    this.blocks.forEach((block) => {
      const matchingLectures = block.items.filter((lecture) => {
        let match = false;

        if (lecture.name.toLowerCase().includes(searchedValue)) {
          match = true;
        }

        if (
          lecture.lecturer &&
          lecture.lecturer.toLowerCase().includes(searchedValue)
        ) {
          match = true;
        }

        if (
          lecture.room &&
          lecture.room.toLowerCase().includes(searchedValue)
        ) {
          match = true;
        }

        return match;
      });

      if (matchingLectures.length > 0) {
        results.push({ date: block.date, items: matchingLectures });
      }
    });

    this.displayedBlocks = results;
  }

  // sets current displayed blocks depending on the segment value
  setDisplayedBlocksToSegment(): void {
    if (!this.segment || this.segment.value === 'all') {
      // display all blocks
      this.displayedBlocks = this.blocks;
      return;
    }

    let blocksToShow: ILectureBlock[] = [];

    switch (this.segment.value) {
      case 'exams':
        // only display blocks that contain exams
        blocksToShow = [];

        this.blocks.forEach((block) => {
          const matches = block.items.filter((item) => {
            return this.utility.isExam(item) && item.status !== 'removed';
          });

          if (matches.length > 0) {
            blocksToShow.push({ date: block.date, items: matches });
          }
        });
        break;
      case 'changes':
        // only display lectures that have changes (have a status)
        blocksToShow = [];

        this.blocks.forEach((block) => {
          const matches = block.items.filter((item) => {
            return item.status;
          });

          if (matches.length > 0) {
            blocksToShow.push({ date: block.date, items: matches });
          }
        });
        break;
      case 'presence':
        // only display lectures that have a room
        blocksToShow = [];

        this.blocks.forEach((block) => {
          const matches = block.items.filter((item) => {
            return item.room;
          });

          if (matches.length > 0) {
            blocksToShow.push({ date: block.date, items: matches });
          }
        });
        break;
      default:
        // display all blocks
        blocksToShow = this.blocks;
        break;
    }

    this.displayedBlocks = blocksToShow;
  }

  count(): void {
    const counts = [0, 0, 0, 0];
    // 0: lectures
    // 1: exams
    // 2: changes
    // 3: presence

    this.blocks.forEach((block) => {
      block.items.forEach((lecture) => {
        if (
          this.utility.isExam(lecture) &&
          lecture.status !== LectureStatus.REMOVED
        ) {
          counts[1]++;
        }
        if (lecture.status !== LectureStatus.REMOVED) {
          counts[0]++;
        }
        if (lecture.status) {
          counts[2]++;
        }
        if (lecture.room && lecture.status !== LectureStatus.REMOVED) {
          counts[3]++;
        }
      });
    });

    this.counts = counts;
    this.hasChanges = counts[2] > 0;

    if (!this.hasChanges && this.segment && this.segment.value === 'changes') {
      this.segment.value = 'all';
    }
  }
}
