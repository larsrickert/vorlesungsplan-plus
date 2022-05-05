<template>
  <IonPage>
    <AppHeader show-back :title="t('settings.pageName')" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <div class="grid">
          <IonItem detail lines="none" class="setting" button @click="openCourseSelect">
            <IonIcon slot="start" :icon="list" />
            <span>{{ t('settings.selectCourses') }} ({{ settingsStore.courses.length }})</span>
          </IonItem>

          <IonItem lines="none" class="setting">
            <IonIcon slot="start" :icon="invertMode" />

            <span class="setting__name">{{ t('settings.theme') }}:</span>

            <IonSelect
              v-model="theme"
              :ok-text="t('global.select')"
              :cancel-text="t('global.close')"
              :interface-options="{ header: t('settings.selectTheme') }"
              :placeholder="`${t('global.select')}...`"
            >
              <IonSelectOption value="auto">
                {{ t('settings.themes.auto') }}
              </IonSelectOption>
              <IonSelectOption value="light">
                {{ t('settings.themes.light') }}
              </IonSelectOption>
              <IonSelectOption value="dark">
                {{ t('settings.themes.dark') }}
              </IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem lines="none" class="setting">
            <IonIcon slot="start" :icon="excludeHolidays ? eyeOff : eye" />
            <span class="setting__name">{{ t('settings.excludeHolidays') }}:</span>
            <IonCheckbox slot="end" v-model="excludeHolidays" />
          </IonItem>

          <div>
            <IonItem lines="none" class="setting">
              <IonIcon slot="start" :icon="notificationTime ? notifications : notificationsOff" />

              <span class="setting__name">{{ t('settings.lectureNotificationTime') }}:</span>

              <IonSelect
                v-model="notificationTime"
                :ok-text="t('global.select')"
                :cancel-text="t('global.close')"
                :interface-options="{ header: t('settings.selectNotificationTime') }"
                :placeholder="`${t('global.select')}...`"
              >
                <IonSelectOption v-for="time of allowedNotificationTimes" :key="time" :value="time">
                  {{ time !== 0 ? t('settings.xMinutes', time) : t('global.deactivated') }}
                </IonSelectOption>
              </IonSelect>
            </IonItem>

            <p>* {{ t('settings.notificationTimeDescription', notificationTime) }}</p>
            <p>{{ t('global.notAvailableOnPlatform', { platform: 'iOS' }) }}</p>

            <div class="flex">
              <span>{{ t('settings.permissionGranted') }}:</span>
              <IonBadge
                class="permissions__badge"
                :color="notificationStore.hasPermissions ? 'success' : 'danger'"
              >
                {{ t(`global.${notificationStore.hasPermissions ? 'yes' : 'no'}`) }}
              </IonBadge>
            </div>

            <a
              v-if="!notificationStore.hasPermissions"
              class="permissions__link"
              href="https://support.google.com/chrome/answer/114662"
              target="_blank"
            >
              {{ t('settings.grantPermissionsLinkText') }}
            </a>
          </div>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import {
  IonBadge,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonItem,
  IonPage,
  IonSelect,
  IonSelectOption,
} from '@ionic/vue';
import { eye, eyeOff, invertMode, list, notifications, notificationsOff } from 'ionicons/icons';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AppHeader from '../components/AppHeader.vue';
import TheCourseSelectModal from '../components/TheCourseSelectModal.vue';
import { showModal } from '../helpers/io';
import { useNotificationStore } from '../store/notifications';
import { allowedNotificationTimes, useSettingsStore } from '../store/settings';

const { t } = useI18n();

const settingsStore = useSettingsStore();

const theme = computed({
  get: (): string => (settingsStore.themeDetection ? 'auto' : settingsStore.theme),
  set: async (value: string) => {
    if (value !== 'auto') await settingsStore.changeTheme(value);
    await settingsStore.changeThemeDetection(value === 'auto');
  },
});

const openCourseSelect = async () => {
  await showModal({
    component: TheCourseSelectModal,
  });
};

const notificationTime = computed({
  get: (): number => settingsStore.lectureNotificationTime,
  set: (value: number) => settingsStore.changeLectureNotificationTime(value),
});

const excludeHolidays = computed<boolean>({
  get: () => settingsStore.excludeHolidays,
  set: async (value) => {
    await settingsStore.changeExcludeHolidays(value);
  },
});

const notificationStore = useNotificationStore();
</script>

<style lang="scss" scoped>
.permissions {
  &__badge {
    margin: 0 10px;
  }

  &__link {
    margin-top: 10px;
    display: block;
  }
}

p {
  line-height: 1.6em;
}
</style>
