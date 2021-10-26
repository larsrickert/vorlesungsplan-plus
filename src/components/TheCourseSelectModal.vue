<template>
  <IonPage>
    <AppHeader show-close :title="t('settings.selectCourses')" @close="modalController.dismiss()" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <p>{{ t('global.placeholder') }}</p>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonPage, modalController } from '@ionic/vue';
import { useI18n } from 'vue-i18n';
import AppHeader from '../components/AppHeader.vue';

const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
