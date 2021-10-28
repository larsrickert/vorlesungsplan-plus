<template>
  <IonItem lines="none" class="lecture">
    <div v-if="false" slot="start">
      <IonIcon :icon="add" />
    </div>

    <div class="lecture__content">
      <div v-if="settingsStore.courses.length > 1" class="flex flex--wrap lecture__badges">
        <IonBadge v-for="course of lecture.courses" :key="course" mode="ios" class="badge">
          {{ course.replace('MOS-', '').replace('MGH-', '') }}
        </IonBadge>
      </div>

      <IonLabel class="lecture__name">{{ lecture.name }}</IonLabel>
      <IonProgressBar v-if="progress" class="lecture__progress" :value="progress" buffer="0" />

      <!-- Meta -->
      <div class="lecture__meta">
        <div class="flex flex--between">
          <IonText>
            {{
              t('global.dateRange', {
                start: d(lecture.start, 'time'),
                end: d(lecture.end, 'time'),
              })
            }}
          </IonText>
          <IonText class="lecture__lecturer">{{ lecture.lecturer }}</IonText>
        </div>

        <IonText>{{ lecture.room }}</IonText>
      </div>
    </div>
  </IonItem>
</template>

<script lang="ts" setup>
import { IonBadge, IonIcon, IonItem, IonLabel, IonProgressBar, IonText } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { onBeforeUnmount, PropType, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import config from '../configs';
import { useSettingsStore } from '../store/settings';
import { MergedLecture } from '../types/lectures';

const props = defineProps({
  lecture: {
    type: Object as PropType<MergedLecture>,
    required: true,
  },
});

const { d, t } = useI18n();
const settingsStore = useSettingsStore();

const progress = ref<number | null>(null);

const calculateProgress = () => {
  const now = Date.now();
  const startTime = props.lecture.start.getTime();
  const endTime = props.lecture.end.getTime();

  if (now > startTime && now < endTime) {
    progress.value = (now - startTime) / (endTime - startTime);
  } else if (progress.value) {
    progress.value = null;
  }
};

// update progress bar every 60 seconds
calculateProgress();
const intervall = setInterval(
  () => calculateProgress(),
  config.intervalls.updateLectureProgressBar
);
onBeforeUnmount(() => clearInterval(intervall));
</script>

<style lang="scss" scoped>
.lecture {
  --background: transparent;
  --inner-padding-top: 12px;
  --inner-padding-bottom: 12px;
  --inner-padding-start: 0;
  --inner-padding-end: 0;
  --padding-start: 20px;
  --padding-end: 20px;

  &__content {
    width: 100%;
  }

  &__name {
    font-weight: bold;
    display: block;
    white-space: normal;
  }

  &__meta {
    font-size: 14px;
    margin-top: 10px;
    font-weight: 500;
  }

  &__lecturer {
    text-align: right;
  }

  &__progress {
    margin-top: 10px;
  }

  &__badges {
    margin-bottom: 6px;
    flex-wrap: wrap;

    .badge {
      margin-bottom: 6px;
      min-width: auto;
      --background: rgba(var(--ion-color-success-rgb), 0.8);

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>
