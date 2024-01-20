<template>
  <IonPage>
    <AppHeader :title="t('events.pageName')" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <AppRefresher :pulling-text="t('global.refresh')" :refresh-func="refreshEvents" />

        <IonProgressBar v-if="!isLoaded" type="indeterminate" />

        <template v-else>
          <p v-if="!eventStore.events.length">{{ t("events.noEventsAvailable") }}</p>

          <div v-else>
            <p v-if="eventStore.upcomingEvents.length">
              {{ t("events.upcomingEvents", eventStore.upcomingEvents.length) }}
            </p>
            <AppCalendar />
          </div>
        </template>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonPage, IonProgressBar } from "@ionic/vue";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import AppCalendar from "../components/AppCalendar.vue";
import AppHeader from "../components/AppHeader.vue";
import AppRefresher from "../components/AppRefresher.vue";
import { showToast } from "../helpers/io";
import { useEventStore } from "../store/events";
import { useSettingsStore } from "../store/settings";

const { t } = useI18n();

const isLoaded = ref(false);
const eventStore = useEventStore();
const settingsStore = useSettingsStore();

const refreshEvents = async () => {
  await eventStore.fetchEvents();
  await showToast({ message: t("toasts.fetchedEvents"), duration: 2000 });
};

watch(
  () => settingsStore.initialized,
  (newValue) => {
    if (newValue) {
      eventStore.fetchEvents().finally(() => {
        isLoaded.value = true;
      });
    }
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped></style>
