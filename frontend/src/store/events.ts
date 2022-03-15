import { defineStore } from 'pinia';
import axiosInstance from '../axios';
import { DhbwEvent } from '../types/events';

export const useEventStore = defineStore('events', {
  state() {
    return {
      events: [] as DhbwEvent[],
    };
  },
  actions: {
    async fetchEvents() {
      const { data } = await axiosInstance.get<DhbwEvent[]>('events');

      data.forEach((event) => {
        event.start = new Date(event.start);
        event.end = new Date(event.end);
      });

      this.events = data;
    },
  },
  getters: {
    upcomingEvents(): DhbwEvent[] {
      return this.events.filter((e) => e.end.getTime() > Date.now());
    },
  },
});
