import axiosInstance from '@/axios';
import { isProduction } from '@/configs';
import { mergeAndSortSameLectures } from '@/helpers/lectures';
import { loggerPlugin } from '@/store/plugins/logger';
import { ApiLecture, Lecture, MergedLecture } from '@/types/lectures';
import { createPinia, defineStore } from 'pinia';

export const pinia = createPinia();
if (!isProduction) pinia.use(loggerPlugin);

export const useStore = defineStore('main', {
  state() {
    return {
      lectures: [] as MergedLecture[],
    };
  },
  actions: {
    async fetchLectures(courses: string[]) {
      const lectures: Lecture[] = [];

      for (const course of courses) {
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
    removeLectures() {
      if (this.lectures.length > 0) this.lectures = [];
    },
  },
  getters: {
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
