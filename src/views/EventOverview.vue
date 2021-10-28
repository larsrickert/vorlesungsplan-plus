<template>
  <IonPage>
    <AppHeader :title="t('events.pageName')" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <IonProgressBar v-if="!isLoaded" type="indeterminate" />

        <template v-else>
          <p>Events are still in construction...</p>
          <IonButton router-link="/events/213">Route to test event</IonButton>
        </template>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonButton, IonContent, IonPage, IonProgressBar } from '@ionic/vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
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
