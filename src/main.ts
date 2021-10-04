import { IonicVue } from '@ionic/vue';
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import { createApp } from 'vue';
import App from './App.vue';
import { registerJavaScriptErrorHandler, registerPromiseErrorHandler } from './helpers/errors';
import { i18n } from './i18n';
import './registerServiceWorker';
import router from './router';
import { pinia } from './store';
import { useErrorStore } from './store/error-handler';
import { CustomError } from './types/errors';

/* Optional CSS utils that can be commented out */
// import '@ionic/vue/css/padding.css';
// import '@ionic/vue/css/float-elements.css';
// import '@ionic/vue/css/text-alignment.css';
// import '@ionic/vue/css/text-transformation.css';
// import '@ionic/vue/css/flex-utils.css';
// import '@ionic/vue/css/display.css';

const app = createApp(App).use(i18n).use(router).use(pinia).use(IonicVue);

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
