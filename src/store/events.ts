import { defineStore } from 'pinia';
import { getTimeout } from '../helpers/misc';

export const useEventStore = defineStore('events', {
  state() {
    return {
      events: [] as Record<string, unknown>[],
    };
  },
  actions: {
    async fetchEvents() {
      await getTimeout(1000);
      return;
    },
  },
  getters: {},
});
