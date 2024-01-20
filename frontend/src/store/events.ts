import { defineStore } from "pinia";
import axiosInstance from "../axios";
import { CustomError, ErrorCode } from "../types/errors";
import type { DhbwEvent } from "../types/events";

export const useEventStore = defineStore("events", {
  state: () => {
    return {
      events: [] as DhbwEvent[],
    };
  },
  actions: {
    async fetchEvents() {
      try {
        const { data } = await axiosInstance.get<DhbwEvent[]>("events");

        data.forEach((event) => {
          event.start = new Date(event.start);
          event.end = new Date(event.end);
        });

        this.events = data;
      } catch (e) {
        throw new CustomError(
          ErrorCode.EVENT_FETCH_FAILED,
          "Error while fetching events",
          e as Error,
        );
      }
    },
  },
  getters: {
    upcomingEvents(): DhbwEvent[] {
      return this.events.filter((e) => e.end.getTime() > Date.now());
    },
  },
});
