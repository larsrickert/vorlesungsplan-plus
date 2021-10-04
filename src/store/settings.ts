import config from '@/configs';
import { getInitLocale, isLocaleAvailable } from '@/helpers/i18n';
import { getValue, initValue, setValue, StorageKey } from '@/helpers/storage';
import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state() {
    return {
      locale: config.i18n.defaultLocale,
      theme: 'light',
    };
  },
  actions: {
    /**
     * Should be called on app load. Inits all settings with their default values and loads them from
     * the storage.
     * Locale default: Currently stored or device language or default locale (from config).
     */
    async loadAndInitDefaults() {
      const locale = await getInitLocale();
      const defaultTheme = this.theme;

      await initValue(StorageKey.LOCALE, locale);
      await initValue(StorageKey.THEME, defaultTheme);

      const currentTheme = (await getValue<string>(StorageKey.THEME)) ?? defaultTheme;

      this.$patch((state) => {
        state.locale = locale;
        state.theme = currentTheme;
      });

      document.documentElement.setAttribute('theme', currentTheme);
    },
    /**
     * Sets the locale setting to the passed value if locale is available for this application and
     * stores it in the storage. Does not change if same value as current.
     */
    async changeLocale(value: string) {
      if (this.locale === value) {
        console.warn(`Not changing to locale "${value}" because its equal to current locale.`);
        return;
      }

      if (!isLocaleAvailable(value)) {
        console.warn(`Unable to change to locale "${value}" because it is not available.`);
        return;
      }

      this.locale = value;
      await setValue(StorageKey.LOCALE, value);
    },
    /**
     * Sets the current theme and stores it in the storage. Does not change if same value
     * as current.
     */
    async changeTheme(value: string) {
      if (this.theme === value) {
        console.warn(`Not changing to theme "${value}" because its equal to current theme.`);
        return;
      }

      this.theme = value;
      document.documentElement.setAttribute('theme', value);
      await setValue(StorageKey.THEME, value);
    },
  },
});
