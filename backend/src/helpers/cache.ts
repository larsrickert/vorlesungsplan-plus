import Keyv from "keyv";

export const cache = new Keyv();

/* eslint-disable */
export enum CacheKey {
  COURSES = "courses",
  EVENTS = "events",
}
/* eslint-enable */
