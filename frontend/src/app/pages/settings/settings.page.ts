import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ISetting, SettingKey } from 'src/app/interfaces/ISetting';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CourseSelectPage } from '../course-select/course-select.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkMode = null;
  currentCourse = '';

  constructor(
    private storage: StorageService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.storage.settings.subscribe((settings) => {
      // display stored dark mode value
      this.darkMode = this.storage.getSetting(SettingKey.DARKMODE);

      // display users current course
      const course = this.storage.getSetting(SettingKey.COURSE);
      this.currentCourse = course ? course : null;
    });
  }

  // store selected value for dark mode to local storage if not already stored
  async setDarkMode(ev): Promise<void> {
    const existingValue = this.storage.getSetting(SettingKey.DARKMODE);
    const changedValue = ev.target.value;

    if (changedValue === existingValue) {
      return;
    } else {
      await this.storage.addSetting({
        key: SettingKey.DARKMODE,
        value: changedValue,
      });
    }
  }

  async openCourseModal() {
    const modal = await this.modalController.create({
      component: CourseSelectPage,
      cssClass: 'app-modal',
      swipeToClose: true,
    });
    return await modal.present();
  }
}
