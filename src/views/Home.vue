<template>
  <IonPage>
    <AppHeader title="Home page" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <h1>Home page</h1>
        <p>{{ t('global.placeholder') }}</p>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonPage } from '@ionic/vue';
import { useI18n } from 'vue-i18n';
import AppHeader from '../components/AppHeader.vue';

const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
