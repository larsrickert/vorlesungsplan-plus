import { IonBackdrop, IonicVue } from '@ionic/vue';
import { createApp } from 'vue';
import App from './App.vue';
import { registerJavaScriptErrorHandler, registerPromiseErrorHandler } from './helpers/errors';
import { i18n } from './i18n';
import router from './router';
import { pinia } from './store';
import { useErrorStore } from './store/error-handler';
import { CustomError } from './types/errors';

const app = createApp(App).use(i18n).use(router).use(pinia).use(IonicVue);

// needed to fix issue that side menu, modal etc. dont have backdrop when running production build
app.component('IonBackdrop', IonBackdrop);

const errorStore = useErrorStore();

// captures the errors that are specific to Vue instances. It would not be able to capture the errors which are outside of Vue instances such as utils files, services etc.
app.config.errorHandler = (err) => {
  // handle uncaught app error
  if (!(err instanceof Error || err instanceof CustomError)) return;
  errorStore.handle(err);
};

registerJavaScriptErrorHandler();
registerPromiseErrorHandler();

router.isReady().then(() => {
  app.mount('#app');
});
