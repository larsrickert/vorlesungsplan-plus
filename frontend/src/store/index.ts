import { createPinia, defineStore } from "pinia";
import axiosInstance from "../axios";
import { isProduction } from "../configs";
import { createLectureBlocks, mapLectures, mergeAndSortSameLectures } from "../helpers/lectures";
import { getValue, setValue } from "../helpers/storage";
import { loggerPlugin } from "../store/plugins/logger";
import { CustomError, ErrorCode } from "../types/errors";
import type { ApiLecture, DayLectureBlock, Lecture, MergedLecture } from "../types/lectures";
import { useSettingsStore } from "./settings";

export const pinia = createPinia();
if (!isProduction) pinia.use(loggerPlugin);

export const useStore = defineStore("main", {
  state: () => {
    return {
      lectureDayBlocks: [] as DayLectureBlock[],
      lecturesLoaded: false,
      showArchivedLectures: false,
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
        const storedFallbacks = await getValue<Lecture[]>(`lectures-${course}`);

        try {
          const { data } = await axiosInstance.get<ApiLecture[]>(`lectures/${course}`);
          _data = data;
        } catch (e) {
          error = error || (e as Error);
        }

        // mark lectures that are being removed or added
        const mappedLectures: Lecture[] | null = _data
          ? mapLectures(_data, storedFallbacks ?? undefined)
          : storedFallbacks;

        if (mappedLectures) {
          await setValue(`lectures-${course}`, mappedLectures);
          lectures = lectures.concat(mappedLectures);
        }
      }

      const sorted = mergeAndSortSameLectures(lectures);
      this.lectureDayBlocks = createLectureBlocks(sorted);
      this.lecturesLoaded = true;

      if (error) {
        throw new CustomError(
          ErrorCode.LECTURE_FETCH_FAILED,
          `Error while fetching lectures. Using cached data if available.`,
          error,
        );
      }
    },
    async clearChanges() {
      // clear status of stored/cached lectures
      for (const course of useSettingsStore().courses) {
        const storedFallbacks = await getValue<Lecture[]>(`lectures-${course}`);
        if (storedFallbacks) {
          const lectures: Lecture[] = storedFallbacks
            .filter((lecture) => lecture.status !== "removed")
            .map((lecture) => {
              lecture.status = "";
              return lecture;
            });

          await setValue(`lectures-${course}`, lectures);
        }
      }

      const blocks: DayLectureBlock[] = [];
      this.lectureDayBlocks.slice(0).forEach((block) => {
        block.lectures = block.lectures.filter((lecture) => lecture.status !== "removed");
        block.lectures.forEach((lecture) => {
          lecture.status = "";
        });

        if (block.lectures.length) blocks.push(block);
      });
      this.lectureDayBlocks = blocks;
    },
  },
  getters: {
    lectures(): MergedLecture[] {
      const lectures: MergedLecture[] = [];
      this.shownLectureDayBlocks.forEach((block) => lectures.push(...block.lectures));
      return lectures;
    },
    shownLectureDayBlocks(): DayLectureBlock[] {
      const settingsStore = useSettingsStore();
      const blocks: DayLectureBlock[] = [];

      this.lectureDayBlocks.forEach((block) => {
        const lectures = block.lectures.filter((lecture) => {
          if (!this.showArchivedLectures && new Date(lecture.end).getTime() < Date.now()) {
            return false;
          }
          if (settingsStore.excludeHolidays && lecture.type === "HOLIDAY") {
            return false;
          }
          return true;
        });
        if (!lectures.length) return;
        blocks.push({ date: block.date, lectures });
      });

      return blocks;
    },
    presenceLectureDayBlocks(): DayLectureBlock[] {
      const blocks: DayLectureBlock[] = [];

      this.shownLectureDayBlocks.forEach((block) => {
        const lectures = block.lectures.filter((lecture) => lecture.type === "PRESENCE");
        if (!lectures.length) return;
        blocks.push({ date: block.date, lectures });
      });

      return blocks;
    },
    changedLectureDayBlocks(): DayLectureBlock[] {
      const blocks: DayLectureBlock[] = [];

      this.shownLectureDayBlocks.forEach((block) => {
        const lectures = block.lectures.filter((lecture) => lecture.status);
        if (!lectures.length) return;
        blocks.push({ date: block.date, lectures });
      });

      return blocks;
    },
    examLectureDayBlocks(): DayLectureBlock[] {
      const blocks: DayLectureBlock[] = [];

      this.shownLectureDayBlocks.forEach((block) => {
        const lectures = block.lectures.filter((lecture) => lecture.isExam);
        if (!lectures.length) return;
        blocks.push({ date: block.date, lectures });
      });

      return blocks;
    },
    holidayLectureDayBlocks(): DayLectureBlock[] {
      const blocks: DayLectureBlock[] = [];

      this.shownLectureDayBlocks.forEach((block) => {
        const lectures = block.lectures.filter((lecture) => lecture.type === "HOLIDAY");
        if (!lectures.length) return;
        blocks.push({ date: block.date, lectures });
      });

      return blocks;
    },
    countUpcomingLectures(): number {
      return this.shownLectureDayBlocks.reduce((prev, curr) => prev + curr.lectures.length, 0);
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
    countHolidayLectures(): number {
      return this.holidayLectureDayBlocks.reduce((prev, curr) => prev + curr.lectures.length, 0);
    },
    filteredLectureDayBlocks(): (searchvalue: string) => DayLectureBlock[] {
      return (searchValue) => {
        const blocks: DayLectureBlock[] = [];
        const searchLc = searchValue.toLowerCase();

        this.shownLectureDayBlocks.forEach((block) => {
          const lectures = block.lectures.filter((lecture) => {
            return (
              lecture.name.toLowerCase().includes(searchLc) ||
              lecture.lecturer.toLowerCase().includes(searchLc) ||
              lecture.rooms.includes(searchLc)
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
