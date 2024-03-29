import { version } from "../../package.json";
import type { Config } from "../types/configs";

export const isProduction: boolean = import.meta.env.PROD;
export const baseUrl: string = import.meta.env.BASE_URL;
export const appVersion: string = version;

/** see https://vitejs.dev/guide/env-and-mode.html for more information */
export const mode: "production" | "development" = import.meta.env.MODE as
  | "production"
  | "development";

const config: Config = {
  i18n: {
    defaultLocale: import.meta.env.VITE_APP_I18N_LOCALE || "en",
    fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || "en",
  },
  api: {
    host: import.meta.env.VITE_APP_API_HOST || "",
  },
  intervalls: {
    fetchLectures: 1000 * 60 * 10,
    updateLectureProgressBar: 1000 * 60,
  },
};

export default config;
