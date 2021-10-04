<template>
  <IonApp>
    <SideMenu
      :nav-items="navItems"
      :sub-items="subItems"
      sub-items-heading="Sub item heading"
      description="Vue & Ionic"
      heading="Template App"
      :img="require('@/assets/logo-icon.svg')"
    />
  </IonApp>
</template>

<script lang="ts" setup>
import { IonApp } from '@ionic/vue';
import { link, person } from 'ionicons/icons';
import { computed, onBeforeUnmount, watch, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import SideMenu from './components/SideMenu.vue';
import config, { isProduction } from './configs';
import { removeErrorHandlerListeners } from './helpers/errors';
import { showToast } from './helpers/io';
import { useAuthStore } from './store/auth';
import { useErrorStore } from './store/error-handler';
import { useNetworkStore } from './store/network';
import { useSwStore } from './store/service-worker';
import { useSettingsStore } from './store/settings';
import { MenuItem } from './types/misc';

const navItems = computed<MenuItem[]>(() => {
  return [
    {
      title: 'Home',
      href: '/',
      icon: person,
    },
  ];
});

const subItems = computed<MenuItem[]>(() => {
  const items: MenuItem[] = [
    {
      title: 'Google',
      href: 'https://google.de',
      icon: link,
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
settingsStore.loadAndInitDefaults();

// login user
const authStore = useAuthStore();
if (!config.auth.disabled) authStore.login();

let { locale, t } = useI18n();

watchEffect(() => {
  // update application locale when locale setting changes
  // app locale should not be changed in other ways
  locale.value = settingsStore.locale;
  document.documentElement.lang = locale.value;
});

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
