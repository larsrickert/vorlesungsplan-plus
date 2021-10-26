import { Config } from '../types/configs';

export const isProduction: boolean = import.meta.env.PROD;
export const baseUrl: string = import.meta.env.BASE_URL;

/** see https://vitejs.dev/guide/env-and-mode.html for more information */
export const mode: 'production' | 'development' = import.meta.env.MODE as
  | 'production'
  | 'development';

const config: Config = {
  i18n: {
    defaultLocale: import.meta.env.VITE_APP_I18N_LOCALE || 'en',
    fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en',
  },
  auth: {
    disabled: import.meta.env.VITE_APP_AUTH_DISABLED === 'true',
  },
  api: {
    host: import.meta.env.VITE_APP_API_HOST || '',
  },
};

export default config;
