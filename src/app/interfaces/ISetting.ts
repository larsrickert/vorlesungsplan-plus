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
}

// keys for local storage
export enum StorageKey {
  SETTINGS = 'settings',
  LECTURES = 'lectures',
  TASKS = 'tasks',
  EVENTS = 'events',
}
