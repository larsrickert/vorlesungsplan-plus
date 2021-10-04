/* eslint-disable no-console */

import { register } from 'register-service-worker';
import { baseUrl, isProduction } from './configs';
import { SW_UPDATE_EVENT_NAME } from './store/service-worker';

if (isProduction) {
  register(`${baseUrl}service-worker.js`, {
    ready() {
      // For more details, visit https://goo.gl/AFskqB
      console.log('App is being served from cache by a service worker.');
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated(registration: ServiceWorkerRegistration) {
      console.log('New content is available; please refresh.');
      document.dispatchEvent(new CustomEvent(SW_UPDATE_EVENT_NAME, { detail: registration }));
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
