import { createPinia, defineStore } from 'pinia';
import axiosInstance from '../axios';
import { isProduction } from '../configs';
import { createLectureBlocks, mergeAndSortSameLectures } from '../helpers/lectures';
import { loggerPlugin } from '../store/plugins/logger';
import { ApiLecture, DayLectureBlock, Lecture, MergedLecture } from '../types/lectures';
import { useSettingsStore } from './settings';

export const pinia = createPinia();
if (!isProduction) pinia.use(loggerPlugin);

export const useStore = defineStore('main', {
  state() {
    return {
      lectures: [] as MergedLecture[],
    };
  },
  actions: {
    async fetchLectures() {
      const settingsStore = useSettingsStore();
      if (!settingsStore.courses.length) {
        this.lectures = [];
        return;
      }

      const lectures: Lecture[] = [];

      for (const course of settingsStore.courses) {
        const { data } = await axiosInstance.get<ApiLecture[]>(`lectures/${course}`);
        data.forEach((lecture) => {
          lectures.push({
            ...lecture,
            start: new Date(lecture.start),
            end: new Date(lecture.end),
          });
        });
      }

      this.lectures = mergeAndSortSameLectures(lectures);
    },
  },
  getters: {
    lectureDayBlocks(): DayLectureBlock[] {
      return createLectureBlocks(this.lectures);
    },
    upcomingLectures(): MergedLecture[] {
      return this.lectures.filter((lecture) => lecture.end.getTime() > Date.now());
    },
    presenceLectures(): MergedLecture[] {
      return this.lectures.filter((lecture) => lecture.room);
    },
    exams(): MergedLecture[] {
      return this.lectures.filter((lecture) => lecture.name.toLowerCase().includes('klausur'));
    },
  },
});
