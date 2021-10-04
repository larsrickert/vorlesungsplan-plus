import { defineStore } from 'pinia';

export const SW_UPDATE_EVENT_NAME = 'swUpdated';

export const useSwStore = defineStore('serviceWorker', {
  state() {
    return {
      registration: null as ServiceWorkerRegistration | null,
      listener: null as ((ev: Event) => void) | null,
      hasUpdate: false,
      isRefreshing: false,
    };
  },
  actions: {
    /**
     * Activates the new service worker if available. Page will automatically refresh when init() was called before.
     */
    update(): void {
      this.hasUpdate = false;

      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!this.registration?.waiting) return;
      // Send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    },
    /**
     * Inits the service worker updater if not already initialized. Has to be called before update().
     */
    init() {
      if (this.listener) return;

      this.listener = (ev: Event) => {
        const customEvent = ev as CustomEvent<ServiceWorkerRegistration>;
        this.registration = customEvent.detail;
        this.hasUpdate = true;
      };

      document.addEventListener(SW_UPDATE_EVENT_NAME, this.listener, {
        once: true,
      });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.isRefreshing) return;

        // reload the page
        this.isRefreshing = true;
        window.location.reload();
      });
    },
    /**
     * Removes the current service worker update event listener.
     */
    removeListener() {
      if (!this.listener) return;
      document.removeEventListener(SW_UPDATE_EVENT_NAME, this.listener);
    },
  },
});
