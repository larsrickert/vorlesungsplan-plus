import { defineStore } from 'pinia';
import config from '../configs';
import { getInitLocale, isLocaleAvailable } from '../helpers/i18n';
import { initValue, setValue, StorageKey } from '../helpers/storage';
import { i18n } from '../i18n';

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
      const localeSetting = await initValue(StorageKey.LOCALE, await getInitLocale());
      const themeSetting = await initValue(StorageKey.THEME, this.theme);

      this.changeLocale(localeSetting);
      this.changeTheme(themeSetting);
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
  },
});
