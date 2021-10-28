<template>
  <IonPage>
    <AppHeader show-back title="Event page" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <h1>Event</h1>
        <p>ID: {{ eventId }}</p>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonPage } from '@ionic/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from '../components/AppHeader.vue';

const route = useRoute();
const eventId = computed((): string => (route.params.id as string) ?? '');
</script>

<style lang="scss" scoped></style>
