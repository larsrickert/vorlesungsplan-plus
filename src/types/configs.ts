export interface Config {
  i18n: {
    /** Default locale/language */
    defaultLocale: string;
    /** Locale to use if key does not exist for current locale */
    fallbackLocale: string;
  };
  auth: {
    /** Whether the authentification should be disabled */
    disabled?: boolean;
  };
  api: {
    host: string;
  };
}
