import { createPinia, defineStore } from 'pinia';
import { isProduction } from '../configs';
import { loggerPlugin } from '../store/plugins/logger';

export const pinia = createPinia();
if (!isProduction) pinia.use(loggerPlugin);

export const useStore = defineStore('main', {
  state() {
    return {};
  },
});
