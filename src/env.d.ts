/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_I18N_LOCALE: string;
  readonly VITE_APP_I18N_FALLBACK_LOCALE: string;
  readonly VITE_APP_AUTH_DISABLED: string;
  readonly VITE_APP_AUTH_DEBUG: string;
  readonly VITE_APP_API_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
