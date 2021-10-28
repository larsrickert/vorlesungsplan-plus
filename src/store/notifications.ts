import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { defineStore } from 'pinia';
import { useStore } from '.';
import { i18n } from '../i18n';
import { useSettingsStore } from './settings';

export const useNotificationStore = defineStore('notifications', {
  state() {
    return {
      hasPermissions: false,
      /** Whether the device supports pwa notifications */
      isSupported: Capacitor.isPluginAvailable('LocalNotifications'),
    };
  },
  actions: {
    async requestPermissions() {
      if (!this.isSupported) {
        this.hasPermissions = false;
        return;
      }

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

      // schedule notifications for all current lectures
      const store = useStore();
      const lectures = store.lectures;
      if (!lectures.length) return;

      const promises: Promise<unknown>[] = [];

      const { t } = i18n.global;

      // minutes before the lecture start when the notification should be scheduled
      const settingsStore = useSettingsStore();
      const scheduleOffsetMinutes = settingsStore.lectureNotificationTime;

      for (let i = 0; i < lectures.length; i++) {
        const lecture = lectures[i];
        const now = new Date();

        // lecture is currently active/started, so dont send notification
        if (lecture.start.getTime() < now.getTime()) continue;

        const scheduleDate = new Date(lecture.start);
        scheduleDate.setMinutes(scheduleDate.getMinutes() - scheduleOffsetMinutes);

        let startingInMinutes = scheduleOffsetMinutes;

        if (scheduleDate.getTime() < now.getTime()) {
          // lecture starts sooner than scheduleOffsetMinutes
          const diffInMs = now.getTime() - scheduleDate.getTime();
          startingInMinutes = Math.round(diffInMs / 1000 / 60);
        }

        const promise = LocalNotifications.schedule({
          notifications: [
            {
              id: i,
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

        promises.push(promise);
      }

      await Promise.allSettled(promises);
    },
  },
});
