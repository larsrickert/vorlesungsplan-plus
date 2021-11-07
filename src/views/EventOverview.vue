<template>
  <IonPage>
    <AppHeader :title="t('events.pageName')" />

    <IonContent :fullscreen="true">
      <div class="page__content">
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
import { useEventStore } from '../store/events';

const { t } = useI18n();

const isLoaded = ref(false);
const eventStore = useEventStore();

eventStore.fetchEvents().finally(() => {
  isLoaded.value = true;
});
</script>

<style lang="scss" scoped></style>
