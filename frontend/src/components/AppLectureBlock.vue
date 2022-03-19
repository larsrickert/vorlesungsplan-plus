<template>
  <div class="block">
    <IonLabel class="block__heading"> {{ dateString }} </IonLabel>
    <AppLecture v-for="lecture of lectures" :key="lecture.ids.join(',')" :lecture="lecture" />
  </div>
</template>

<script lang="ts" setup>
import { IonLabel } from '@ionic/vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AppLecture from '../components/AppLecture.vue';
import { isToday } from '../helpers/misc';
import { MergedLecture } from '../types/lectures';

interface LectureBlockProps {
  date: Date;
  lectures: MergedLecture[];
}

const props = defineProps<LectureBlockProps>();

const { d, t } = useI18n();

const dateString = computed((): string => {
  if (isToday(props.date)) return t('global.today');
  if (isToday(props.date, 1)) return t('global.tomorrow');
  return d(props.date, 'dateFullWeekday');
});
</script>

<style lang="scss" scoped>
.block {
  box-shadow: var(--app-box-shadow);
  border-radius: 10px;
  margin-bottom: 30px;
  background: var(--app-color-grey-light);

  &__heading {
    display: block;
    color: var(--ion-color-primary);
    font-size: 18px;
    padding: 20px;
    font-weight: 500;
    border-bottom: 1px solid var(--ion-border-color);
  }

  .lecture {
    &:nth-child(even) {
      --background: var(--app-color-grey-medium);
    }

    &:last-child {
      --border-radius: 0 0 10px 10px;
    }
  }
}
</style>
