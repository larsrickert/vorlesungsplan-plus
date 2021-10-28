import { createPinia, defineStore } from 'pinia';
import axiosInstance from '../axios';
import { isProduction } from '../configs';
import { createLectureBlocks, isExam, mergeAndSortSameLectures } from '../helpers/lectures';
import { loggerPlugin } from '../store/plugins/logger';
import { ApiLecture, DayLectureBlock, Lecture } from '../types/lectures';
import { useSettingsStore } from './settings';

export const pinia = createPinia();
if (!isProduction) pinia.use(loggerPlugin);

export const useStore = defineStore('main', {
  state() {
    return {
      lectureDayBlocks: [] as DayLectureBlock[],
      lecturesLoaded: false,
    };
  },
  actions: {
    async fetchLectures() {
      const settingsStore = useSettingsStore();
      if (!settingsStore.courses.length) {
        this.lectureDayBlocks = [];
        this.lecturesLoaded = true;
        return;
      }

      const lectures: Lecture[] = [];
      settingsStore.changeLecturesLastUpdated(new Date());

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
      this.lecturesLoaded = true;
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
    examLectureDayBlocks(): DayLectureBlock[] {
      const blocks: DayLectureBlock[] = [];

      this.lectureDayBlocks.forEach((block) => {
        const lectures = block.lectures.filter((lecture) => isExam(lecture));
        if (!lectures.length) return;
        blocks.push({ date: block.date, lectures });
      });

      return blocks;
    },
    countUpcomingLectures(): number {
      return this.upcomingLectureDayBlocks.reduce((prev, curr) => prev + curr.lectures.length, 0);
    },
    countPresenceLectures(): number {
      return this.presenceLectureDayBlocks.reduce((prev, curr) => prev + curr.lectures.length, 0);
    },
    countExaxmLectures(): number {
      return this.examLectureDayBlocks.reduce((prev, curr) => prev + curr.lectures.length, 0);
    },
    filteredLectureDayBlocks(): (seachvalue: string) => DayLectureBlock[] {
      return (searchValue: string) => {
        const blocks: DayLectureBlock[] = [];
        const searchLc = searchValue.toLowerCase();

        this.lectureDayBlocks.forEach((block) => {
          const lectures = block.lectures.filter((lecture) => {
            return (
              lecture.name.toLowerCase().includes(searchLc) ||
              lecture.lecturer.toLowerCase().includes(searchLc) ||
              lecture.room.includes(searchLc)
            );
          });
          if (!lectures.length) return;
          blocks.push({ date: block.date, lectures });
        });

        return blocks;
      };
    },
  },
});
