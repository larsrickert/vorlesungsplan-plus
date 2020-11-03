import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILecture, LectureStatus } from 'src/app/interfaces/ILecture';
import { ISetting, SettingKey, StorageKey } from 'src/app/interfaces/ISetting';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  static API_HOST = 'https://api.rickstack.de/';
  static INIT_SETTINGS = false;

  // observables
  private settingsBs = new BehaviorSubject<ISetting[]>([]);
  settings: Observable<ISetting[]> = this.settingsBs.asObservable();

  private lecturesBs = new BehaviorSubject<ILecture[]>([]);
  lectures: Observable<ILecture[]> = this.lecturesBs.asObservable();

  constructor(private http: HttpClient) {
    // init settings
    this.get(StorageKey.SETTINGS).then((settings) => {
      StorageService.INIT_SETTINGS = true;
      this.settingsBs.next(Array.isArray(settings) ? settings : []);
    });

    // init lectures
    this.get(StorageKey.LECTURES).then((lectures) => {
      this.lecturesBs.next(
        Array.isArray(lectures) ? this.validateLectures(lectures) : []
      );
    });
  }

  async get(key: StorageKey): Promise<any> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  async store(key: StorageKey, value: any): Promise<void> {
    await Storage.set({
      key,
      value: JSON.stringify(value),
    });
  }

  // fetch lectures for set course from api or local storage if api is not available
  async fetchLectures(): Promise<boolean> {
    const course = this.getSetting(SettingKey.COURSE);

    if (!course) {
      // no course set, so lectures can't be fetched
      console.error('Can not fetch lectures for undefined or invalid course.');
      return false;
    }

    try {
      // send get request to api
      let lectures: ILecture[] = await this.http
        .get<ILecture[]>(
          `${StorageService.API_HOST}?course=${course.toLowerCase()}`
        )
        .toPromise();

      lectures = this.validateLectures(lectures);

      // add status to lectures
      lectures = this.setStatus(this.lecturesBs.getValue(), lectures);
      this.lecturesBs.next(lectures);

      // store fetched lectures in local storage and update last updated date
      await this.store(StorageKey.LECTURES, lectures);
      await this.addSetting({
        key: SettingKey.LASTUPDATED,
        value: new Date(Date.now()),
      });
      return true;
    } catch (error) {
      console.error('Error while fetching lectures!');
      console.error(error);

      // try to load lectures from local storage
      const local: ILecture[] = await this.get(StorageKey.LECTURES);
      this.lecturesBs.next(local ? this.validateLectures(local) : []);

      console.log('Fetched lectures from local storage.');
      return false;
    }
  }

  // returns array of all available courses
  async fetchCourses(): Promise<string[]> {
    return this.http.get<string[]>(`${StorageService.API_HOST}`).toPromise();
  }

  // ensures that lectures from local storage are valid
  private validateLectures(lectures: ILecture[]): ILecture[] {
    lectures.forEach((lecture) => {
      lecture.end = new Date(lecture.end);
      lecture.start = new Date(lecture.start);
      lecture.lastModified = new Date(lecture.lastModified);
    });

    return lectures;
  }

  private setStatus(
    oldLectures: ILecture[],
    newLectures: ILecture[]
  ): ILecture[] {
    if (!oldLectures || oldLectures.length === 0) {
      return newLectures;
    }

    // remove past lectures from old lectures
    oldLectures = oldLectures.filter((lecture) => {
      return lecture.end.getTime() >= Date.now();
    });

    const checked: ILecture[] = [];

    // check if new lectures were added
    newLectures.forEach((newLecture) => {
      const lecture = oldLectures.find((oldLecture) => {
        return this.compareLectures(oldLecture, newLecture);
      });

      if (!lecture || lecture.status) {
        // newLecture was added
        newLecture.status = LectureStatus.ADDED;
      } else if (lecture.status) {
        newLecture.status = lecture.status;
      }

      checked.push(newLecture);
    });

    // checked now contains all new lectures and newly added lectures have status "added"

    // check if old lectures were removed
    oldLectures.forEach((oldLecture) => {
      const lecture = newLectures.find((newLecture) => {
        return this.compareLectures(newLecture, oldLecture);
      });

      if (!lecture) {
        // oldLecture was removed
        oldLecture.status = LectureStatus.REMOVED;
        checked.push(oldLecture);
      }
    });

    return checked.sort((a, b) => {
      return a.start.getTime() - b.start.getTime();
    });
  }

  // resets status of all lectures and removes lecture with status "removed"
  async resetStatus(): Promise<void> {
    const lectures = this.lecturesBs.getValue();
    const reset: ILecture[] = [];

    lectures.forEach((lecture) => {
      if (lecture.status === LectureStatus.ADDED || !lecture.status) {
        lecture.status = null;
        reset.push(lecture);
      }
    });

    this.lecturesBs.next(reset);
    await this.store(StorageKey.LECTURES, reset);
  }

  // returns true when both lectures are equal
  private compareLectures(a: ILecture, b: ILecture): boolean {
    for (const attr in a) {
      // ignore status, lastModified and uid
      if (attr === 'status' || attr === 'lastModified' || attr === 'uid') {
        continue;
      }

      if (a[attr] instanceof Date && b[attr] instanceof Date) {
        // compare date attribute
        if (a[attr].getTime() !== b[attr].getTime()) {
          return false;
        }
      } else if (a[attr] !== b[attr]) {
        // attributes are different
        return false;
      }
    }

    // lectures are equal
    return true;
  }

  // update or add setting to local storage if its no duplicate
  async addSetting(setting: ISetting) {
    const settings: ISetting[] = this.settingsBs.getValue();

    const storedSetting = settings.find((storedSetting) => {
      return storedSetting.key === setting.key;
    });

    if (storedSetting) {
      storedSetting.value = setting.value;
    } else {
      settings.push(setting);
    }

    this.settingsBs.next(settings);
    await this.store(StorageKey.SETTINGS, settings);
  }

  getSetting(identifier: SettingKey): any {
    const settings = this.settingsBs.getValue();

    const match = settings.find((setting) => {
      return setting.key === identifier;
    });

    return match ? match.value : null;
  }
}
