<template>
  <IonItem
    lines="none"
    class="lecture"
    :class="{
      'lecture--added': lecture.status === 'added',
      'lecture--removed': lecture.status === 'removed',
    }"
  >
    <div v-if="lecture.status" slot="start" class="icon">
      <IonIcon v-if="lecture.status === 'added'" :icon="addCircleOutline" color="success" />
      <IonIcon v-else :icon="closeCircleOutline" color="danger" />
    </div>

    <div v-else-if="lecture.isExam" slot="start" class="icon">
      <IonIcon :icon="documentTextOutline" />
    </div>

    <div class="lecture__content">
      <div v-if="settingsStore.courses.length > 1" class="flex flex--wrap lecture__badges">
        <IonBadge
          v-for="course of lecture.courses"
          :key="course"
          mode="ios"
          class="badge"
          :style="{ '--background': getRandomColor(course) }"
        >
          {{ course }}
        </IonBadge>
      </div>

      <IonLabel class="lecture__name">{{ lecture.name }}</IonLabel>
      <IonProgressBar
        v-if="progress && lecture.status !== 'removed'"
        class="lecture__progress"
        :value="progress"
        :buffer="0"
      />

      <!-- Meta -->
      <div class="lecture__meta">
        <div class="flex flex--between">
          <IonText>
            {{
              t("global.dateRange", {
                start: d(lecture.start, "time"),
                end: d(lecture.end, "time"),
              })
            }}
          </IonText>
          <IonText class="lecture__lecturer">{{ lecture.lecturer }}</IonText>
        </div>

        <IonText v-if="lecture.rooms.length" class="rooms">
          <IonIcon v-if="lecture.type === 'ONLINE'" :icon="desktopOutline" class="rooms__icon" />
          {{ lecture.rooms.join(", ") }}
        </IonText>
      </div>
    </div>
  </IonItem>
</template>

<script lang="ts" setup>
import { IonBadge, IonIcon, IonItem, IonLabel, IonProgressBar, IonText } from "@ionic/vue";
import {
  addCircleOutline,
  closeCircleOutline,
  desktopOutline,
  documentTextOutline,
} from "ionicons/icons";
import { onBeforeUnmount, ref } from "vue";
import { useI18n } from "vue-i18n";
import config from "../configs";
import { getRandomColor } from "../helpers/misc";
import { useSettingsStore } from "../store/settings";
import type { MergedLecture } from "../types/lectures";

interface LectureProps {
  lecture: MergedLecture;
}

const props = defineProps<LectureProps>();

const { d, t } = useI18n();
const settingsStore = useSettingsStore();

const progress = ref<number | null>(null);

const calculateProgress = () => {
  const now = Date.now();
  const startTime = new Date(props.lecture.start).getTime();
  const endTime = new Date(props.lecture.end).getTime();

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
  config.intervalls.updateLectureProgressBar,
);
onBeforeUnmount(() => clearInterval(intervall));
</script>

<style lang="scss" scoped>
.icon {
  font-size: 30px;
}

.lecture {
  --background: transparent;
  --inner-padding-top: 12px;
  --inner-padding-bottom: 12px;
  --inner-padding-start: 0;
  --inner-padding-end: 0;
  --padding-start: 20px;
  --padding-end: 20px;

  &--added {
    --border-width: 0 0 0 2px;
    --border-style: solid;
    --border-color: var(--ion-color-success);
  }

  &--removed {
    --border-width: 0 0 0 2px;
    --border-style: solid;
    --border-color: var(--ion-color-danger);
  }

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

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .rooms {
    display: flex;
    align-items: center;

    &__icon {
      margin-right: 4px;
      min-width: 14px;
    }
  }
}
</style>
