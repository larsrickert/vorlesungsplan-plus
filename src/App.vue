<template>
  <IonApp>
    <SideMenu
      :nav-items="navItems"
      :sub-items="subItems"
      sub-items-heading="App"
      description="DHBW Mosbach"
      heading="Vorlesungsplan+"
      :img="require('@/assets/logo.svg')"
    />
  </IonApp>
</template>

<script lang="ts" setup>
import { IonApp } from '@ionic/vue';
import { link, school } from 'ionicons/icons';
import { computed, onBeforeUnmount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import SideMenu from './components/SideMenu.vue';
import { isProduction } from './configs';
import { removeErrorHandlerListeners } from './helpers/errors';
import { showToast } from './helpers/io';
import { useErrorStore } from './store/error-handler';
import { useNetworkStore } from './store/network';
import { useSwStore } from './store/service-worker';
import { useSettingsStore } from './store/settings';
import { MenuItem } from './types/misc';

let { t } = useI18n();

const navItems = computed<MenuItem[]>(() => {
  return [
    {
      title: t('pages.timetable.name'),
      href: '/',
      icon: school,
    },
  ];
});

const subItems = computed<MenuItem[]>(() => {
  const items: MenuItem[] = [];

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
settingsStore.loadAndInitDefaults();

const swStore = useSwStore();
swStore.init();

// needed in combination with watch to prevent multiple toasts when locale changes.
// that would happend if watchEffect is used
const hasUpdate = computed(() => swStore.hasUpdate);

watch(
  hasUpdate,
  async () => {
    if (swStore.hasUpdate)
      await showToast({
        message: t('global.swUpdateAvailable'),
        btn: {
          text: t('global.update'),
          onClick: () => swStore.update(),
        },
      });
  },
  { immediate: true }
);

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

onBeforeUnmount(() => {
  networkStore.removeListener();
  swStore.removeListener();
  removeErrorHandlerListeners();
});
</script>

<style lang="scss">
@import './styles';
</style>
