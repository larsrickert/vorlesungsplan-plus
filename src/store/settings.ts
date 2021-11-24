import { defineStore } from 'pinia';
import config from '../configs';
import { getInitLocale, isLocaleAvailable } from '../helpers/i18n';
import { initValue, setValue, StorageKey } from '../helpers/storage';
import { i18n } from '../i18n';

export const allowedNotificationTimes: readonly number[] = Object.freeze([0, 15, 30, 45, 60]);

export const useSettingsStore = defineStore('settings', {
  state() {
    return {
      locale: config.i18n.defaultLocale,
      theme: 'light',
      courses: [] as string[],
      lecturesLastUpdated: null as Date | null,
      lectureNotificationTime: 15,
    };
  },
  actions: {
    /**
     * Should be called on app load. Inits all settings with their default values and loads them from
     * the storage.
     * Locale default: Currently stored or device language or default locale (from config).
     */
    async loadAndInitDefaults() {
      const localeSetting = await initValue(StorageKey.LOCALE, await getInitLocale());
      const themeSetting = await initValue(StorageKey.THEME, this.theme);
      const coursesSetting = await initValue(StorageKey.COURSES, this.courses);
      const lastUpdatedSetting = await initValue(
        StorageKey.LECTURES_LAST_UPDATED,
        this.lecturesLastUpdated
      );
      const lectureNotificationTime = await initValue(
        StorageKey.LECTURES_NOTIFICATION_TIME,
        this.lectureNotificationTime
      );

      this.changeLocale(localeSetting);
      this.changeTheme(themeSetting);
      this.changeCourses(coursesSetting);
      if (lastUpdatedSetting) this.changeLecturesLastUpdated(new Date(lastUpdatedSetting));
      this.changeLectureNotificationTime(lectureNotificationTime);
    },
    /**
     * Sets the locale setting to the passed value if locale is available for this application and
     * stores it in the storage.
     */
    async changeLocale(value: string) {
      if (!isLocaleAvailable(value)) {
        console.warn(`Unable to change to locale "${value}" because it is not available.`);
        return;
      }

      const { locale } = i18n.global;
      locale.value = value;
      document.documentElement.lang = value;

      if (this.locale === value) return;

      this.locale = value;
      await setValue(StorageKey.LOCALE, value);
    },
    /**
     * Sets the current theme and stores it in the storage.
     */
    async changeTheme(value: string) {
      document.documentElement.setAttribute('theme', value);

      if (this.theme === value) return;

      this.theme = value;
      await setValue(StorageKey.THEME, value);
    },
    /**
     * Sets the current selected courses and stores it in the storage.
     */
    async changeCourses(value: string[]) {
      if (JSON.stringify(value) === JSON.stringify(this.courses)) return;

      this.courses = value;
      await setValue(StorageKey.COURSES, value);
    },
    async changeLecturesLastUpdated(date: Date) {
      if (this.lecturesLastUpdated?.getTime() === date.getTime()) return;
      this.lecturesLastUpdated = date;
      await setValue(StorageKey.LECTURES_LAST_UPDATED, date);
    },
    async changeLectureNotificationTime(value: number) {
      if (value < 0 || this.lectureNotificationTime === value) return;
      if (!allowedNotificationTimes.includes(value)) return;

      this.lectureNotificationTime = value;
      await setValue(StorageKey.LECTURES_NOTIFICATION_TIME, value);
    },
  },
});
