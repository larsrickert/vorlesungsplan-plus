<template>
  <div class="lecture" :class="{ 'lecture--new': false, 'lecture--removed': false }">
    <!-- <ion-icon
      *ngIf="utility.isExam(lecture) && !lecture.status"
      class="lecture__icon"
      name="document-text-outline"
    ></ion-icon>
    <ion-icon
      *ngIf="lecture.status === statusAdded"
      name="add-circle-outline"
      color="success"
      class="lecture__icon"
      title="Vorlesung wurde neu hinzugefügt"
    ></ion-icon>
    <ion-icon
      *ngIf="lecture.status === statusRemoved"
      name="close-circle-outline"
      color="danger"
      class="lecture__icon"
      title="Vorlesung wurde gelöscht"
    ></ion-icon> -->

    <div class="lecture__content">
      <div class="flex">
        <IonLabel class="lecture__name">{{ lecture.name }}</IonLabel>
        <template v-if="settingsStore.courses.length > 1">
          <IonBadge :key="course" v-for="course of lecture.courses" mode="ios" class="badge">
            {{ course.replace('MOS-', '').replace('MGH-', '') }}
          </IonBadge>
        </template>
      </div>
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
          <IonText>{{ lecture.lecturer }}</IonText>
        </div>

        <IonText>{{ lecture.room }}</IonText>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '@/store/settings';
import { MergedLecture } from '@/types/lectures';
import { IonBadge, IonLabel, IonProgressBar, IonText } from '@ionic/vue';
import { onBeforeUnmount, PropType } from '@vue/runtime-core';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

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
const intervall = setInterval(() => calculateProgress(), 60 * 1000);

onBeforeUnmount(() => {
  clearInterval(intervall);
});
</script>

<style lang="scss" scoped>
.lecture {
  padding: 12px 20px;
  display: flex;
  align-items: center;

  &__name {
    font-weight: 600;
    display: block;
  }

  &--last {
    border-radius: 0 0 0 4px;
  }

  &__icon {
    font-size: 30px;
    margin-right: 20px;
  }

  &__content {
    width: 100%;
  }

  &__meta {
    font-size: 14px;
    margin-top: 10px;
    font-weight: 500;
  }

  &__progress {
    margin-top: 10px;
  }

  &-new {
    border-left: 3px solid var(--ion-color-success);
  }

  &-removed {
    border-left: 3px solid var(--ion-color-danger);
  }

  .badge {
    margin-left: 10px;
  }
}
</style>
