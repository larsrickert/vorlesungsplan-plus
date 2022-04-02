import { defineStore } from 'pinia';
import config from '../configs';
import { getInitLocale, isLocaleAvailable } from '../helpers/i18n';
import { randomColors } from '../helpers/misc';
import { getValue, initValue, setValue, StorageKey } from '../helpers/storage';
import { i18n } from '../i18n';
import { CustomError, ErrorCode } from '../types/errors';

export const allowedNotificationTimes: readonly number[] = Object.freeze([0, 15, 30, 45, 60]);

let themeMediaQueryList: MediaQueryList | undefined;
let themeListener: ((ev: MediaQueryListEvent) => unknown) | undefined;

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      locale: config.i18n.defaultLocale,
      theme: 'dark',
      themeDetection: true,
      courses: [] as string[],
      lecturesLastUpdated: null as Date | null,
      lectureNotificationTime: 15,
      iosWidgetVersion: '',
      excludeHolidays: false,
      initialized: false,
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
      this.changeLocale(localeSetting);

      const themeSetting = await initValue(StorageKey.THEME, this.theme);
      this.changeTheme(themeSetting);

      const themeDetection = await initValue(StorageKey.THEME_DETECTION, this.themeDetection);
      this.changeThemeDetection(themeDetection);

      const coursesSetting = await initValue(StorageKey.COURSES, this.courses);
      this.changeCourses(coursesSetting);

      const lastUpdatedSetting = await initValue(
        StorageKey.LECTURES_LAST_UPDATED,
        this.lecturesLastUpdated
      );
      if (lastUpdatedSetting) this.changeLecturesLastUpdated(new Date(lastUpdatedSetting));

      const lectureNotificationTime = await initValue(
        StorageKey.LECTURES_NOTIFICATION_TIME,
        this.lectureNotificationTime
      );
      this.changeLectureNotificationTime(lectureNotificationTime);

      const iosWidgetVersion = await getValue<string>(StorageKey.IOS_WIDGET_VERSION);
      if (iosWidgetVersion) this.changeIosWidgetVersion(iosWidgetVersion);

      const excludeHolidays = await initValue(StorageKey.EXCLUDE_HOLIDAYS, this.excludeHolidays);
      this.changeExcludeHolidays(excludeHolidays);

      this.initialized = true;
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
    async changeThemeDetection(value: boolean) {
      if (this.themeDetection !== value) {
        this.themeDetection = value;
        await setValue(StorageKey.THEME_DETECTION, value);
      }

      if (!window.matchMedia) return;
      if (!themeMediaQueryList) {
        themeMediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      }

      if (value) {
        this.changeTheme(themeMediaQueryList.matches ? 'dark' : 'light');
        if (!themeListener) {
          themeListener = (event) => this.changeTheme(event.matches ? 'dark' : 'light');
        }
        themeMediaQueryList.addEventListener('change', themeListener);
      } else if (!value && themeListener) {
        themeMediaQueryList.removeEventListener('change', themeListener);
        themeListener = undefined;
      }
    },
    /**
     * Sets the current selected courses and stores it in the storage.
     */
    async changeCourses(value: string[]) {
      if (JSON.stringify(value) === JSON.stringify(this.courses)) return;

      if (value.length > this.maxCoursesCount) {
        throw new CustomError(
          ErrorCode.COURSE_LIMIT_EXCEEDED,
          `You cannot select more than ${this.maxCoursesCount} courses.`
        );
      }

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
    async changeIosWidgetVersion(value: string) {
      if (this.iosWidgetVersion === value) return;

      this.iosWidgetVersion = value;
      await setValue(StorageKey.IOS_WIDGET_VERSION, value);
    },
    async changeExcludeHolidays(value: boolean) {
      if (this.excludeHolidays === value) return;

      this.excludeHolidays = value;
      await setValue(StorageKey.EXCLUDE_HOLIDAYS, value);
    },
  },
  getters: {
    maxCoursesCount(): number {
      return randomColors.length;
    },
  },
});
