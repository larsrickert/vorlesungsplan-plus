<template>
  <IonPage>
    <AppHeader show-close :title="t('settings.selectCourses')" @close="modalController.dismiss()" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <h2>{{ t("settings.availableCourses") }}</h2>

        <p>
          {{
            t("settings.selectedCourses", {
              count: settingsStore.courses.length,
              max: settingsStore.maxCoursesCount,
            })
          }}
        </p>

        <IonProgressBar v-if="!isLoaded" type="indeterminate" />

        <template v-else>
          <p v-if="!courses.length">{{ t("settings.noCoursesAvailable") }}</p>

          <div v-else>
            <IonSearchbar
              v-model="searchValue"
              animated
              show-cancel-button="focus"
              :cancel-button-text="t('global.cancel')"
              :placeholder="t('global.searchPlaceholder')"
              autocapitalize="sentences"
              mode="ios"
            />

            <p v-if="searchValue && !coursesFilteredBySearch.length">
              {{ t("global.emptySearch") }}
            </p>

            <IonItemGroup v-for="group of getGroups(coursesFilteredBySearch)" :key="group.name">
              <IonItemDivider>
                <IonLabel>{{ group.name }}</IonLabel>
              </IonItemDivider>

              <IonItem
                v-for="course of group.courses"
                :key="course"
                lines="none"
                :class="{ selected: selectedCourses.includes(course) }"
              >
                <IonCheckbox
                  slot="start"
                  :checked="selectedCourses.includes(course)"
                  @ionChange="toggleCourse(course)"
                />
                {{ course }}
              </IonItem>
            </IonItemGroup>
          </div>
        </template>
      </div>

      <AppFab v-if="isLoaded" :title="t('global.select')" :icon="saveIcon" @click="save" />
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import {
  IonCheckbox,
  IonContent,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonSearchbar,
  modalController,
} from "@ionic/vue";
import { save as saveIcon } from "ionicons/icons";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import axiosInstance from "../axios";
import AppHeader from "../components/AppHeader.vue";
import { showToast } from "../helpers/io";
import { useSettingsStore } from "../store/settings";
import { CustomError, ErrorCode } from "../types/errors";
import AppFab from "./AppFab.vue";

const { t } = useI18n();

const courses = ref<string[]>([]);
const isLoaded = ref(false);

axiosInstance
  .get<string[]>("courses")
  .then((response) => {
    courses.value = response.data;
  })
  .catch((e) => {
    throw new CustomError(
      ErrorCode.COURSE_FETCH_FAILED,
      "Error while fetching courses",
      e as Error,
    );
  })
  .finally(() => {
    isLoaded.value = true;
  });

interface CourseGroup {
  name: string;
  courses: string[];
}

const getGroup = (course: string): string => {
  return course.split(/\d/)[0] ?? "";
};

const getGroups = (courses: string[]): CourseGroup[] => {
  const groups: string[] = [];

  // get unique groups
  courses.forEach((course) => {
    const group = getGroup(course);
    if (!groups.includes(group)) groups.push(group);
  });

  const courseGroups: CourseGroup[] = [];

  groups.forEach((group) => {
    const relatedCourses = courses.filter((course) => getGroup(course) === group);
    courseGroups.push({ name: group, courses: relatedCourses });
  });

  return courseGroups;
};

const settingsStore = useSettingsStore();
const selectedCourses = ref<string[]>(settingsStore.courses.slice());

const toggleCourse = (course: string) => {
  if (!selectedCourses.value.includes(course)) selectedCourses.value.push(course);
  else selectedCourses.value = selectedCourses.value.filter((c) => c !== course);
};

const save = async () => {
  // filter out not available courses
  selectedCourses.value = selectedCourses.value.filter((c) => courses.value.includes(c));

  await settingsStore.changeCourses(selectedCourses.value);
  modalController.dismiss();
  await showToast({
    message: t("toasts.savedCourses", selectedCourses.value.length),
    duration: 2000,
  });
};

const searchValue = ref("");
const coursesFilteredBySearch = computed((): string[] => {
  if (!searchValue.value) return courses.value;
  return courses.value.filter((course) =>
    course.toLowerCase().includes(searchValue.value.toLowerCase()),
  );
});
</script>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

h2 {
  margin-top: 0;
  margin-bottom: 16px;
}

ion-searchbar {
  margin-bottom: 16px;
}

ion-item-group {
  font-weight: 500;

  @include breakpoint(s) {
    margin: 0 -20px;
  }
}

ion-item {
  --background: transparent;
  font-weight: 500;

  &.selected {
    --background: var(--ion-color-step-50);
  }
}
</style>
