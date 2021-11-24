<template>
  <IonPage>
    <AppHeader title="Beta notes" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <h1>Known issues for this beta version</h1>

        <ol>
          <li>
            Selects are not working (e.g. theme on settings page). This is caused by Ionic 6 beta
            and vite because ion-alert component is not shown.
          </li>
          <li>Event calendar popover positioning is not optimal (not scrollable)</li>
        </ol>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonPage } from '@ionic/vue';
import AppHeader from '../components/AppHeader.vue';
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 0;
}
</style>
