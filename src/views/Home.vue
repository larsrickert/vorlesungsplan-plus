<template>
  <IonPage>
    <AppHeader :title="headerTitle" />

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
        <IonProgressBar v-if="!store.lecturesLoaded" type="indeterminate" />

        <template v-else>
          <template v-if="!store.countUpcomingLectures">
            <p>{{ t('timetable.noLecturesText') }}</p>
          </template>

          <template v-else>
            <IonSearchbar
              v-model="searchValue"
              animated
              show-cancel-button="focus"
              :cancel-button-text="t('global.cancel')"
              :placeholder="t('global.searchPlaceholder')"
              mode="ios"
            />

            <AppSegment v-if="!searchValue" v-model="selectedSegment" :options="segments" />

            <div v-show="searchValue">
              <AppLectureBlock
                v-for="block of searchBlocks"
                :key="block.date.toISOString()"
                :date="block.date"
                :lectures="block.lectures"
              />

              <p v-if="!searchBlocks.length">{{ t('global.emptySeach') }}</p>
            </div>

            <div v-show="!searchValue">
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
          </template>
        </template>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonPage,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
} from '@ionic/vue';
import { chevronDown } from 'ionicons/icons';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import AppHeader from '../components/AppHeader.vue';
import AppLectureBlock from '../components/AppLectureBlock.vue';
import AppSegment from '../components/AppSegment.vue';
import { showToast } from '../helpers/io';
import { useStore } from '../store';
import { useSettingsStore } from '../store/settings';
import { DayLectureBlock } from '../types/lectures';
import { SelectOption } from '../types/misc';

const { t, d } = useI18n();
const settingsStore = useSettingsStore();

const headerTitle = computed((): string => {
  const count = settingsStore.courses.length;
  if (count === 1) return `${t('timetable.pageName')} ${settingsStore.courses[0]}`;
  return t('timetable.pageName', settingsStore.courses.length);
});

const store = useStore();

const refreshLectures = async (ev?: any) => {
  await store.fetchLectures();

  ev?.target.complete?.();
  await showToast({ message: t('toasts.fetchedLectures'), duration: 2000 });
};

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

const searchValue = ref('');
const searchBlocks = computed((): DayLectureBlock[] => {
  return store.filteredLectureDayBlocks(searchValue.value);
});
</script>

<style lang="scss" scoped>
ion-searchbar {
  margin-bottom: 20px;
}
</style>
