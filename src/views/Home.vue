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
        <AppSegment v-model="selectedSegment" :options="segments" />

        <div v-show="selectedSegment === 'all'">
          <AppLectureBlock
            v-for="block of store.upcomingLectureDayBlocks"
            :key="block.date.toISOString()"
            :date="block.date"
            :lectures="block.lectures"
          />
        </div>

        <div v-show="selectedSegment === 'presence'">
          <AppLectureBlock
            v-for="block of store.presenceLectureDayBlocks"
            :key="block.date.toISOString()"
            :date="block.date"
            :lectures="block.lectures"
          />
        </div>

        <div v-show="selectedSegment === 'exams'">
          <AppLectureBlock
            v-for="block of store.examLectureDayBlocks"
            :key="block.date.toISOString()"
            :date="block.date"
            :lectures="block.lectures"
          />
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonPage, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { chevronDown } from 'ionicons/icons';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import AppHeader from '../components/AppHeader.vue';
import AppLectureBlock from '../components/AppLectureBlock.vue';
import AppSegment from '../components/AppSegment.vue';
import { showToast } from '../helpers/io';
import { useStore } from '../store';
import { useSettingsStore } from '../store/settings';
import { SelectOption } from '../types/misc';

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

const selectedSegment = ref('all');
const segments = computed((): SelectOption[] => {
  return [
    {
      name: t('timetable.segments.all', { count: store.countUpcomingLectures }),
      value: 'all',
    },
    {
      name: t('timetable.segments.presence', { count: store.countPresenceLectures }),
      value: 'presence',
    },
    {
      name: t('timetable.segments.exams', { count: store.countExaxmLectures }),
      value: 'exams',
    },
  ];
});
</script>

<style lang="scss" scoped></style>
