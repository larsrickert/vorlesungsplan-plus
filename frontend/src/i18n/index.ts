/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import { createI18n } from 'vue-i18n';
import config from '../configs';
import datetimeFormats from './datetime-formats';
import numberFormats from './number-formats';

export const i18n = createI18n({
  legacy: false,
  locale: config.i18n.defaultLocale,
  fallbackLocale: config.i18n.fallbackLocale,
  messages,
  datetimeFormats,
  numberFormats,
});
