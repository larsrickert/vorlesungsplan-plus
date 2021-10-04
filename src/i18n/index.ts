import config from '@/configs';
import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n';
import datetimeFormats from './datetime-formats';

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages(): LocaleMessages<VueMessageType> {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages: LocaleMessages<VueMessageType> = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key).default;
    }
  });
  return messages;
}

export const i18n = createI18n({
  legacy: false,
  locale: config.i18n.defaultLocale,
  fallbackLocale: config.i18n.fallbackLocale,
  messages: loadLocaleMessages(),
  datetimeFormats,
});
