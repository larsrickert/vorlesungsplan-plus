import { Config } from '@/types/configs';

export const isProduction = process.env.NODE_ENV === 'production';
export const baseUrl = process.env.BASE_URL as string;

/** see https://cli.vuejs.org/guide/mode-and-env.html for more information */
export const mode: 'production' | 'development' | 'test' = process.env.NODE_ENV;

const config: Config = {
  i18n: {
    defaultLocale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  },
  auth: {
    disabled: process.env.VUE_APP_AUTH_DISABLED === 'true',
    debug: process.env.VUE_APP_AUTH_DEBUG === 'true',
  },
};

export default config;
