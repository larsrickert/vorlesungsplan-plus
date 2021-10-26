<template>
  <IonApp>
    <SideMenu
      :nav-items="navItems"
      :sub-items="subItems"
      sub-items-heading="Sub item heading"
      description="Vue & Ionic"
      heading="Template App"
      img="/favicon.svg"
    />

    <ThePwaReloadPrompt />
  </IonApp>
</template>

<script lang="ts" setup>
import { IonApp } from '@ionic/vue';
import { link, person } from 'ionicons/icons';
import { computed, onBeforeUnmount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import SideMenu from './components/SideMenu.vue';
import ThePwaReloadPrompt from './components/ThePwaReloadPrompt.vue';
import { isProduction } from './configs';
import { removeErrorHandlerListeners } from './helpers/errors';
import { showToast } from './helpers/io';
import { useErrorStore } from './store/error-handler';
import { useNetworkStore } from './store/network';
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

const { t } = useI18n();

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
  removeErrorHandlerListeners();
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
