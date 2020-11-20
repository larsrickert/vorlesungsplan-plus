import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Plugins, Capacitor } from '@capacitor/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { IBlockable, IBlock } from 'src/app/interfaces/IBlock';
import { ILecture } from 'src/app/interfaces/ILecture';
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  static appVersion = '1.0.0';
  static versionHost = 'https://api.rickstack.de/version/';

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private http: HttpClient
  ) {}

  // send a push notification to the user if permission ist granted
  async sendPushNotification(title: string, message: string): Promise<boolean> {
    const result = await LocalNotifications.requestPermission();

    if (result.granted) {
      await LocalNotifications.schedule({
        notifications: [
          {
            title,
            body: message,
            id: 1,
            sound: null,
            attachments: null,
            actionTypeId: '',
            extra: null,
          },
        ],
      });

      return true;
    }

    return false;
  }

  // show toast message at the bottom of the screen
  async showToast(message: string): Promise<void> {
    const alreadyDisplaying = await this.toastController.getTop();

    if (!alreadyDisplaying) {
      const toast = await this.toastController.create({
        message,
        duration: 2000,
      });

      await toast.present();
    }
  }

  // show loading in the middle of the screen (blocks user input)
  async showLoading(message: string): Promise<HTMLIonLoadingElement | null> {
    const alreadyDisplaying = await this.loadingController.getTop();

    if (!alreadyDisplaying) {
      const loading = await this.loadingController.create({
        cssClass: 'app-loading',
        message,
      });

      await loading.present();
      return loading;
    } else {
      return null;
    }
  }

  createBlocks(items: IBlockable[]): IBlock[] {
    const blocks: IBlock[] = [];
    let newBlock: IBlock = { date: null, items: [] };
    let currentDate = this.stripTimeFromDate(new Date(Date.now()));

    // check each lectures if it is for current date and then assign it to the new block
    for (const item of items) {
      if (this.isSameDay(currentDate, item.start)) {
        // lecture is for current block
        if (!newBlock.date) {
          // new block
          newBlock.date = this.stripTimeFromDate(currentDate);
        }

        newBlock.items.push(item);
      } else {
        // new day / block
        if (newBlock.date && newBlock.items.length > 0) {
          blocks.push(newBlock);
        }

        // reset
        currentDate = this.stripTimeFromDate(item.start);
        newBlock = { date: currentDate, items: [] };
        newBlock.items.push(item);
      }
    }

    // add last block
    if (newBlock.date && newBlock.items.length > 0) {
      blocks.push(newBlock);
    }

    return blocks;
  }

  // returns true if two days are equal, only checks year, month and day
  isSameDay(a: Date, b: Date): boolean {
    return (
      this.stripTimeFromDate(a).getTime() ===
      this.stripTimeFromDate(b).getTime()
    );
  }

  // unifies date to year, month, day only (for comparrison), optional days can be added to the date (a.e. 1 returns date for tomorrow)
  stripTimeFromDate(date: Date, addDays?: number): Date {
    const days = addDays ? date.getDate() + addDays : date.getDate();
    return new Date(date.getFullYear(), date.getMonth(), days, 0, 0, 0, 0);
  }

  // returns true if lecture is an exam
  isExam(lecture: ILecture): boolean {
    return lecture.name.toLowerCase().includes('klausur');
  }

  hasChanges(lectures: ILecture[]): boolean {
    for (const lecture of lectures) {
      if (lecture.status) {
        return true;
      }
    }

    return false;
  }

  async getLatestAppVersion(): Promise<string> {
    const version = await this.http
      .get<string>(UtilityService.versionHost)
      .toPromise();
    return version ? version : '';
  }

  async checkForAppUpdates(): Promise<void> {
    if (!Capacitor.isNative) {
      return;
    }

    try {
      await LocalNotifications.requestPermission();
      const version = await this.getLatestAppVersion();

      if (version && version !== UtilityService.appVersion) {
        this.sendPushNotification(
          'Aktualisierung verfügbar!',
          `Für deine Vorlesungsplan+ App ist ein Update von Version ${UtilityService.appVersion} auf ${version} verfügbar. Du kannst sie im Menü unter Installation aktualisieren`
        );
      }
    } catch (error) {
      console.error(error);
    }
  }
}
