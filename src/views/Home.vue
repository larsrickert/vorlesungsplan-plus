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
import { chevronDown } from 'ionicons/icons';
import { onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import AppHeader from '../components/AppHeader.vue';
import AppLectureBlock from '../components/AppLectureBlock.vue';
import config from '../configs';
import { showToast } from '../helpers/io';
import { useStore } from '../store';

const { t } = useI18n();

const store = useStore();

const refreshLectures = async (ev?: any) => {
  await store.fetchLectures();

  ev?.target.complete?.();
  await showToast({ message: t('toasts.fetchedLectures'), duration: 2000 });
};

// update lectures periodically
const intervall = setInterval(() => refreshLectures(), config.intervalls.fetchLectures);
onBeforeUnmount(() => clearInterval(intervall));
</script>

<style lang="scss" scoped></style>
