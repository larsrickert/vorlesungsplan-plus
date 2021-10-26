<template>
  <IonPage>
    <AppHeader :title="t('timetable.pageName')" />

    <IonContent :fullscreen="true">
      <IonRefresher
        slot="fixed"
        pull-min="150"
        pull-max="200"
        @ionRefresh="refreshLectures($event)"
      >
        <IonRefresherContent
          :pulling-icon="chevronDown"
          :pulling-text="t('global.refresh')"
          refreshing-spinner="circles"
          :refreshing-text="t('global.isRefreshing')"
        />
      </IonRefresher>

      <div class="page__content">
        <h1>{{ t('timetable.pageName') }}</h1>
        <p>{{ t('global.placeholder') }}</p>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonPage, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { chevronDown } from 'ionicons/icons';
import { useI18n } from 'vue-i18n';
import AppHeader from '../components/AppHeader.vue';
import { showToast } from '../helpers/io';
import { useStore } from '../store';

const { t } = useI18n();

const store = useStore();

const refreshLectures = async (ev: any) => {
  await store.fetchLectures();

  ev.target.complete?.();
  await showToast({ message: t('toasts.fetchedLectures'), duration: 2000 });
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
}
</style>
