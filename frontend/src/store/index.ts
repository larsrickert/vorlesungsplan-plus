import { createPinia, defineStore } from 'pinia';
import axiosInstance from '../axios';
import { isProduction } from '../configs';
import {
  createLectureBlocks,
  isExam,
  mapLectures,
  mergeAndSortSameLectures,
} from '../helpers/lectures';
import { getValue, setValue } from '../helpers/storage';
import { loggerPlugin } from '../store/plugins/logger';
import { CustomError, ErrorCode } from '../types/errors';
import { ApiLecture, DayLectureBlock, Lecture, MergedLecture } from '../types/lectures';
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

      let lectures: Lecture[] = [];
      settingsStore.changeLecturesLastUpdated(new Date());
      let error: Error | null = null;

      for (const course of settingsStore.courses) {
        let _data: ApiLecture[] | null = null;
        const storedFallbacks = await getValue<ApiLecture[]>(`lectures-${course}`);

        try {
          const { data } = await axiosInstance.get<ApiLecture[]>(`lectures/${course}`);
          await setValue(`lectures-${course}`, data);
          _data = data;
        } catch (e) {
          _data = storedFallbacks;
          error = error || (e as Error);

          if (!_data) {
            throw new CustomError(
              ErrorCode.LECTURE_FETCH_FAILED,
              `Error while fetching lectures for course ${course}`,
              e as Error
            );
          }
        }

        // mark lectures that are being removed or added
        lectures = lectures.concat(mapLectures(_data, course, storedFallbacks ?? undefined));
      }

      const sorted = mergeAndSortSameLectures(lectures);
      this.lectureDayBlocks = createLectureBlocks(sorted);
      this.lecturesLoaded = true;

      if (error) {
        throw new CustomError(
          ErrorCode.LECTURE_FETCH_FAILED,
          `Error while fetching lectures. Using cached data if available.`,
          error
        );
      }
    },
    clearChanges() {
      const blocks: DayLectureBlock[] = [];
      this.lectureDayBlocks.slice(0).forEach((block) => {
        block.lectures = block.lectures.filter((lecture) => lecture.status !== 'removed');
        block.lectures.forEach((lecture) => {
          lecture.status = '';
        });

        if (block.lectures.length) blocks.push(block);
      });
      this.lectureDayBlocks = blocks;
    },
  },
  getters: {
    lectures(): MergedLecture[] {
      const lectures: MergedLecture[] = [];
      this.upcomingLectureDayBlocks.forEach((block) => lectures.push(...block.lectures));
      return lectures;
    },
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
    changedLectureDayBlocks(): DayLectureBlock[] {
      const blocks: DayLectureBlock[] = [];

      this.lectureDayBlocks.forEach((block) => {
        const lectures = block.lectures.filter((lecture) => lecture.status);
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
    countExamLectures(): number {
      return this.examLectureDayBlocks.reduce((prev, curr) => prev + curr.lectures.length, 0);
    },
    countChangedLectures(): number {
      return this.changedLectureDayBlocks.reduce((prev, curr) => prev + curr.lectures.length, 0);
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
