export interface ISetting {
  key: SettingKey;
  value: any;
}

// keys to identify setting
export enum SettingKey {
  DARKMODE = 'darkMode',
  LASTUPDATED = 'lastUpdated',
  COURSE = 'course',
  INTRO = 'intro',
  LASTCHANGENOTIFICATION = 'lastChangeNotification',
}

// keys for local storage
export enum StorageKey {
  SETTINGS = 'settings',
  LECTURES = 'lectures',
  TASKS = 'tasks',
  EVENTS = 'events',
  COURSES = 'courses',
}

export interface ILectureChangeNotification {
  course: string;
  lectures: string;
}
