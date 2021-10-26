<template>
  <IonApp>
    <SideMenu
      :nav-items="navItems"
      :sub-items="subItems"
      heading="Vorlesungsplan+"
      description="DHBW Mosbach & Mergentheim"
      sub-items-heading="App"
      :img="LogoUrl"
    />

    <ThePwaReloadPrompt />
  </IonApp>
</template>

<script lang="ts" setup>
import { IonApp } from '@ionic/vue';
import { cog, link, school } from 'ionicons/icons';
import { computed, onBeforeUnmount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import LogoUrl from './assets/logo.svg';
import SideMenu from './components/SideMenu.vue';
import ThePwaReloadPrompt from './components/ThePwaReloadPrompt.vue';
import config, { isProduction } from './configs';
import { removeErrorHandlerListeners } from './helpers/errors';
import { showToast } from './helpers/io';
import { useStore } from './store';
import { useErrorStore } from './store/error-handler';
import { useNetworkStore } from './store/network';
import { useSettingsStore } from './store/settings';
import { MenuItem } from './types/misc';

const { t } = useI18n();

const navItems = computed<MenuItem[]>(() => {
  return [
    {
      title: t('timetable.pageName'),
      href: '/',
      icon: school,
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
  ];

  if (!isProduction) {
    items.push({
      title: 'Test',
      href: '/test',
      icon: link,
    });
  }

  return items;
});

const networkStore = useNetworkStore();
networkStore.initListener();

const settingsStore = useSettingsStore();
const store = useStore();

settingsStore.loadAndInitDefaults().then(() => {
  store.fetchLectures();
});

// fetch lectures when courses change
const courseSetting = computed(() => settingsStore.courses);
watch(courseSetting, async () => {
  await store.fetchLectures();
});

const errorStore = useErrorStore();
const error = computed(() => errorStore.error);

watch(
  error,
  async () => {
    const e = error.value;
    if (!e?.expose) return;

    await showToast({
      message: e.toString(),
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
