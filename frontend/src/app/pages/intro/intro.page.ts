import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import {
  IEventBlock,
  ILectureBlock,
  ITaskBlock,
} from 'src/app/interfaces/IBlock';
import { LectureStatus } from 'src/app/interfaces/ILecture';
import { SettingKey } from 'src/app/interfaces/ISetting';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CourseSelectPage } from '../course-select/course-select.page';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  dummyLecture: ILectureBlock = {
    date: new Date(),
    items: [
      {
        name: 'Vorlesung XY',
        start: new Date(Date.now() - 1000 * 60 * 60),
        end: new Date(Date.now() + 1000 * 60 * 30),
        lastModified: new Date(),
        lecturer: 'Dozent',
        room: 'Raum XYZ',
        uid: '1234',
      },
    ],
  };

  dummyChanges: ILectureBlock = {
    date: new Date(),
    items: [
      {
        name: 'Vorlesung XY',
        start: new Date(Date.now() - 1000 * 60 * 60),
        end: new Date(Date.now() + 1000 * 60 * 30),
        lastModified: new Date(),
        lecturer: 'Dozent',
        room: 'Raum XYZ',
        uid: '1234',
        status: LectureStatus.ADDED,
      },
      {
        name: 'Vorlesung XY',
        start: new Date(Date.now() - 1000 * 60 * 60),
        end: new Date(Date.now() + 1000 * 60 * 30),
        lastModified: new Date(),
        lecturer: 'Dozent',
        room: 'Raum XYZ',
        uid: '1234',
        status: LectureStatus.REMOVED,
      },
    ],
  };

  dummyTask: ITaskBlock = {
    date: new Date(Date.now() + 1000 * 60 * 60 * 24),
    items: [
      {
        id: '1',
        name: 'Etwas super wichtiges',
        start: new Date(Date.now() + 1000 * 60 * 60 * 24),
        end: new Date(Date.now() + 1000 * 60 * 60 * 24),
        lecture: 'Vorlesung XY',
        notes: 'Das ist eine total wichtige Aufgabe.',
      },
    ],
  };

  dummyEvent: IEventBlock = {
    date: new Date(Date.now() + 1000 * 60 * 60 * 24),
    items: [
      {
        id: '1',
        name: 'Veranstaltung XY',
        description: 'Beschreibung',
        start: new Date(Date.now() - 1000 * 60 * 60),
        end: new Date(Date.now() + 1000 * 60 * 30),
        lastModified: new Date(Date.now() - 1000 * 60 * 60),
        location: 'DHBW Mosbach',
      },
    ],
  };

  darkMode = null;
  course = null;

  constructor(
    private menuCtrl: MenuController,
    private storage: StorageService,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.storage.settings.subscribe(() => {
      this.darkMode = this.storage.getSetting(SettingKey.DARKMODE);
      this.course = this.storage.getSetting(SettingKey.COURSE);
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // store selected value for dark mode to local storage if not already stored
  async setDarkMode(ev): Promise<void> {
    await this.storage.addSetting({
      key: SettingKey.DARKMODE,
      value: ev.target.value,
    });
  }

  async openCourseModal() {
    const modal = await this.modalController.create({
      component: CourseSelectPage,
      cssClass: 'app-modal',
      componentProps: {
        redirect: false,
      },
    });
    return await modal.present();
  }

  async complete() {
    this.storage.addSetting({ key: SettingKey.INTRO, value: true });
    await this.menuCtrl.enable(true);
    this.router.navigate(['/timetable'], { skipLocationChange: true });
  }
}
