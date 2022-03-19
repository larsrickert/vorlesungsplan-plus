<template>
  <IonApp>
    <SideMenu
      :nav-items="navItems"
      :sub-items="subItems"
      heading="Vorlesungsplan+"
      description="DHBW Mosbach & Mergentheim"
      :sub-items-heading="`App (${t('global.appVersion', { version: appVersion })})`"
      :img="LogoUrl"
    />

    <ThePwaReloadPrompt />
  </IonApp>
</template>

<script lang="ts" setup>
import { IonApp } from '@ionic/vue';
import { calendar, cog, openOutline, school } from 'ionicons/icons';
import { computed, onBeforeUnmount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import LogoUrl from './assets/logo.svg';
import SideMenu from './components/SideMenu.vue';
import ThePwaReloadPrompt from './components/ThePwaReloadPrompt.vue';
import config, { appVersion } from './configs';
import { removeErrorHandlerListeners } from './helpers/errors';
import { showToast } from './helpers/io';
import { useStore } from './store';
import { useErrorStore } from './store/error-handler';
import { useNetworkStore } from './store/network';
import { useNotificationStore } from './store/notifications';
import { useSettingsStore } from './store/settings';
import { MenuItem } from './types/misc';

const { t } = useI18n();
const settingsStore = useSettingsStore();
const store = useStore();
const networkStore = useNetworkStore();
const notificationStore = useNotificationStore();
const errorStore = useErrorStore();

const navItems = computed<MenuItem[]>(() => {
  return [
    {
      title: t('timetable.pageName', settingsStore.courses.length),
      href: '/',
      icon: school,
    },
    {
      title: t('events.pageName'),
      href: '/events',
      icon: calendar,
    },
  ];
});

const subItems = computed<MenuItem[]>(() => {
  const items: MenuItem[] = [
    {
      title: t('settings.pageName'),
      href: '/settings',
      icon: cog,
    },
    {
      title: t('global.changelog'),
      href: `https://github.com/larsrickert/vorlesungsplan-plus/blob/${
        appVersion.includes('beta') ? 'beta' : 'main'
      }/frontend/CHANGELOG.md`,
      icon: openOutline,
    },
    {
      title: t('global.aboutTheApp'),
      href: `https://github.com/larsrickert/vorlesungsplan-plus/blob/${
        appVersion.includes('beta') ? 'beta' : 'main'
      }/README.md`,
      icon: openOutline,
    },
  ];

  return items;
});

// fetch lectures when courses change
watch(
  () => settingsStore.courses,
  async () => {
    await store.fetchLectures();
  }
);

networkStore.initListener();
const router = useRouter();

settingsStore.loadAndInitDefaults().then(() => {
  // init notifications
  const lectures = computed(() => store.lectures);
  notificationStore.requestPermissions().then(() => {
    watch(lectures, async () => {
      await notificationStore.scheduleLectureNotifications();
    });
  });

  // redirect to settings page if no courses are set
  if (!settingsStore.courses.length) {
    router.push('/settings');
    showToast({
      message: t('settings.selectCoursesToast'),
      color: 'warning',
      duration: 7500,
    });
  }
});

// re-schedule notifications when notification time changes
watch(
  () => settingsStore.lectureNotificationTime,
  async () => {
    await notificationStore.scheduleLectureNotifications();
  }
);

watch(
  () => errorStore.error,
  async () => {
    if (!errorStore.error?.expose) return;

    await showToast({
      message: errorStore.error.toString(),
      color: 'danger',
      btn: { text: t('global.close'), onClick: () => errorStore.dismiss() },
    });
  },
  { immediate: true }
);

// update lectures periodically
const lectureFetchIntervall = setInterval(
  () => store.fetchLectures(),
  config.intervalls.fetchLectures
);
onBeforeUnmount(() => clearInterval(lectureFetchIntervall));

onBeforeUnmount(() => {
  networkStore.removeListener();
  removeErrorHandlerListeners();
  clearInterval(lectureFetchIntervall);
});
</script>

<style lang="scss">
@import 'v-calendar/dist/style.css';
@import '@ionic/vue/css/core.css';
@import '@ionic/vue/css/normalize.css';
@import '@ionic/vue/css/structure.css';
@import '@ionic/vue/css/typography.css';
/* Optional CSS utils that can be commented out */
// import '@ionic/vue/css/padding.css';
// import '@ionic/vue/css/float-elements.css';
// import '@ionic/vue/css/text-alignment.css';
// import '@ionic/vue/css/text-transformation.css';
// import '@ionic/vue/css/flex-utils.css';
// import '@ionic/vue/css/display.css';

@import './styles';
</style>
