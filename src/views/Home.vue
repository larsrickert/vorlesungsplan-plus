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
          :pulling-text="refresherText"
          refreshing-spinner="circles"
          :refreshing-text="t('global.isRefreshing')"
        />
      </IonRefresher>

      <div class="page__content">
        <AppLectureBlock
          v-for="block of store.upcomingLectureDayBlocks"
          :key="block.date.toISOString()"
          :date="block.date"
          :lectures="block.lectures"
        />
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonPage, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { computed } from '@vue/reactivity';
import { chevronDown } from 'ionicons/icons';
import { useI18n } from 'vue-i18n';
import AppHeader from '../components/AppHeader.vue';
import AppLectureBlock from '../components/AppLectureBlock.vue';
import { showToast } from '../helpers/io';
import { useStore } from '../store';
import { useSettingsStore } from '../store/settings';

const { t, d } = useI18n();

const store = useStore();

const refreshLectures = async (ev?: any) => {
  await store.fetchLectures();

  ev?.target.complete?.();
  await showToast({ message: t('toasts.fetchedLectures'), duration: 2000 });
};

const settingsStore = useSettingsStore();
const refresherText = computed((): string => {
  return settingsStore.lecturesLastUpdated
    ? t('timetable.lastUpdated', {
        date: d(settingsStore.lecturesLastUpdated, 'dateTime'),
      })
    : t('global.refresh');
});
</script>

<style lang="scss" scoped></style>
