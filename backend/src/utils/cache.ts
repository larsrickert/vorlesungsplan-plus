import Keyv from 'keyv';

export const cache = new Keyv();

export enum CacheKey {
  COURSES = 'courses',
  EVENTS = 'events',
  HOLIDAYS = 'holidays',
}
