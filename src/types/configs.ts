export interface Config {
  i18n: {
    /** Default locale/language */
    defaultLocale: string;
    /** Locale to use if key does not exist for current locale */
    fallbackLocale: string;
  };
  api: {
    host: string;
  };
  intervalls: {
    fetchLectures: number;
    updateLectureProgressBar: number;
  };
}
