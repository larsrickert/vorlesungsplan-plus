<template>
  <IonPage>
    <AppHeader
      :title="`${t('pages.timetable.lectures')} ${
        settingsStore.courses.length === 1 ? settingsStore.courses[0] : ''
      }`"
    />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <AppSegment :options="segmentOptions" v-model="selectedSegment" />

        <AppLectureBlock
          v-for="block of displayedBlocks"
          :key="block.date.getTime()"
          :date="block.date"
          :lectures="block.lectures"
        />
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import AppLectureBlock from '@/components/AppLectureBlock.vue';
import AppSegment from '@/components/AppSegment.vue';
import { createLectureBlocks } from '@/helpers/lectures';
import { useStore } from '@/store';
import { useSettingsStore } from '@/store/settings';
import { DayLectureBlock } from '@/types/lectures';
import { SelectOption } from '@/types/misc';
import { IonContent, IonPage } from '@ionic/vue';
import { computed, ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const settingsStore = useSettingsStore();

const store = useStore();

watchEffect(async () => {
  if (settingsStore.courses.length) await store.fetchLectures(settingsStore.courses);
  else store.removeLectures();
});

const segmentOptions = computed((): SelectOption[] => [
  {
    value: 'all',
    name: t('pages.timetable.all', { count: store.upcomingLectures.length }),
  },
  {
    value: 'presence',
    name: t('pages.timetable.presence', { count: store.presenceLectures.length }),
  },
  {
    value: 'exams',
    name: t('pages.timetable.exams', { count: store.exams.length }),
  },
]);

const selectedSegment = ref('all');

const displayedBlocks = computed((): DayLectureBlock[] => {
  const segment = selectedSegment.value;
  if (segment === 'all') return createLectureBlocks(store.upcomingLectures);
  if (segment === 'presence') return createLectureBlocks(store.presenceLectures);
  if (segment === 'exams') return createLectureBlocks(store.exams);
  return [];
});
</script>

<style lang="scss" scoped></style>
