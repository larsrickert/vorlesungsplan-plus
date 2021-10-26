import { createPinia, defineStore } from 'pinia';
import axiosInstance from '../axios';
import { isProduction } from '../configs';
import { createLectureBlocks, mergeAndSortSameLectures } from '../helpers/lectures';
import { loggerPlugin } from '../store/plugins/logger';
import { ApiLecture, DayLectureBlock, Lecture } from '../types/lectures';
import { useSettingsStore } from './settings';

export const pinia = createPinia();
if (!isProduction) pinia.use(loggerPlugin);

export const useStore = defineStore('main', {
  state() {
    return {
      lectureDayBlocks: [] as DayLectureBlock[],
    };
  },
  actions: {
    async fetchLectures() {
      const settingsStore = useSettingsStore();
      if (!settingsStore.courses.length) {
        this.lectureDayBlocks = [];
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
            course,
          });
        });
      }

      const sorted = mergeAndSortSameLectures(lectures);
      this.lectureDayBlocks = createLectureBlocks(sorted);
    },
  },
  getters: {
    upcomingLectureDayBlocks(): DayLectureBlock[] {
      const blocks: DayLectureBlock[] = [];

      this.lectureDayBlocks.forEach((block) => {
        const lectures = block.lectures.filter((lecture) => {
          return lecture.end.getTime() > Date.now();
        });
        if (!lectures.length) return;
        blocks.push({ date: block.date, lectures });
      });

      return blocks;
    },
    presenceLectureDayBlocks(): DayLectureBlock[] {
      const blocks: DayLectureBlock[] = [];

      this.lectureDayBlocks.forEach((block) => {
        const lectures = block.lectures.filter((lecture) => lecture.room);
        if (!lectures.length) return;
        blocks.push({ date: block.date, lectures });
      });

      return blocks;
    },
    exams(): DayLectureBlock[] {
      const blocks: DayLectureBlock[] = [];

      this.lectureDayBlocks.forEach((block) => {
        const lectures = block.lectures.filter((lecture) => {
          return lecture.name.toLowerCase().includes('klausur');
        });
        if (!lectures.length) return;
        blocks.push({ date: block.date, lectures });
      });

      return blocks;
    },
  },
});
