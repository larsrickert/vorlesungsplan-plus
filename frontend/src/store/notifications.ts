import { LocalNotifications } from '@capacitor/local-notifications';
import { defineStore } from 'pinia';
import { useStore } from '.';
import { i18n } from '../i18n';
import { MergedLecture } from '../types/lectures';
import { useSettingsStore } from './settings';

function getNotificationIdentifier(lecture: MergedLecture): string {
  return `${lecture.ids.join(',')};${lecture.start}`;
}

export const useNotificationStore = defineStore('notifications', {
  state: () => {
    return {
      hasPermissions: false,
      scheduledLectures: [] as string[],
    };
  },
  actions: {
    async requestPermissions() {
      try {
        const { display } = await LocalNotifications.requestPermissions();
        this.hasPermissions = display === 'granted';
      } catch (e) {
        if ((e as Record<string, unknown>).code === 'UNAVAILABLE') {
          this.hasPermissions = false;
          return;
        }

        throw e;
      }
    },
    async scheduleLectureNotifications() {
      // cancel all currently scheduled notifications
      const { notifications } = await LocalNotifications.getPending();
      await LocalNotifications.cancel({ notifications });

      await this.requestPermissions();
      if (!this.hasPermissions) return;

      // minutes before the lecture start when the notification should be scheduled
      const settingsStore = useSettingsStore();
      const scheduleOffsetMinutes = settingsStore.lectureNotificationTime;
      if (!scheduleOffsetMinutes) return;

      // schedule notifications for all current lectures
      const store = useStore();
      const lectures = store.lectures.filter((l) => l.status !== 'removed');
      if (!lectures.length) return;

      const promises: Promise<unknown>[] = [];
      const { t } = i18n.global;
      const now = new Date();

      lectures.forEach((lecture) => {
        const start = new Date(lecture.start);
        const identifier = getNotificationIdentifier(lecture);

        // lecture is currently active/started, so dont send notification
        if (start.getTime() < now.getTime()) return;

        const scheduleDate = new Date(start);
        scheduleDate.setMinutes(scheduleDate.getMinutes() - scheduleOffsetMinutes);

        let startingInMinutes = scheduleOffsetMinutes;

        if (scheduleDate.getTime() < now.getTime()) {
          // lecture starts within schedule offset but was already scheduled, so a notification
          // has already been sent. Dont send another notification then
          if (this.scheduledLectures.includes(identifier)) {
            return;
          }

          // lecture starts sooner than scheduleOffsetMinutes
          const diff = start.getTime() - now.getTime();
          startingInMinutes = Math.round(diff / 1000 / 60);
        }

        const promise = LocalNotifications.schedule({
          notifications: [
            {
              id: lecture.ids.length ? lecture.ids[0] : -1,
              title: t('notifications.upcomingLecture', { courses: lecture.courses.join(', ') }),
              body: t('notifications.lectureStartsInXMinutes', {
                name: lecture.name,
                minutes: startingInMinutes,
              }),
              autoCancel: true,
              schedule: {
                allowWhileIdle: true,
                at: scheduleDate,
              },
            },
          ],
        });

        // remember for which lectures a notification has been scheduled
        // so if this action is called multiple times, we dont want to resend a notification
        // that has already been sent
        if (!this.scheduledLectures.includes(identifier)) {
          this.scheduledLectures.push(identifier);
        }

        promises.push(promise);
      });

      await Promise.allSettled(promises);
    },
  },
});
