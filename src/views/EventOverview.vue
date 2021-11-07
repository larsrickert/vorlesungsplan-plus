<template>
  <IonPage>
    <AppHeader :title="t('events.pageName')" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <AppRefresher :pulling-text="t('global.refresh')" :refresh-func="refreshEvents" />

        <IonProgressBar v-if="!isLoaded" type="indeterminate" />

        <template v-else>
          <p v-if="!eventStore.events.length">{{ t('events.noEventsAvailable') }}</p>

          <template v-else>
            <p>{{ t('events.upcomingEvents', eventStore.upcomingEvents.length) }}</p>
            <AppCalendar />
          </template>
        </template>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonPage, IonProgressBar } from '@ionic/vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import AppCalendar from '../components/AppCalendar.vue';
import AppHeader from '../components/AppHeader.vue';
import AppRefresher from '../components/AppRefresher.vue';
import { showToast } from '../helpers/io';
import { useEventStore } from '../store/events';

const { t } = useI18n();

const isLoaded = ref(false);
const eventStore = useEventStore();

const refreshEvents = async () => {
  await eventStore.fetchEvents();
  await showToast({ message: t('toasts.fetchedEvents'), duration: 2000 });
};

eventStore.fetchEvents().finally(() => {
  isLoaded.value = true;
});
</script>

<style lang="scss" scoped></style>
