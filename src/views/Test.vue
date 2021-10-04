<template>
  <IonPage>
    <AppHeader :show-back="true" :show-close="true" title="Test page" @close="onClose" />

    <IonContent :fullscreen="true">
      <!-- <div slot="fixed">
        <p>Fixed content</p>
      </div> -->

      <div class="page__content">
        <h1>Test page</h1>
        <p>{{ t('global.placeholder') }}</p>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import { IonContent, IonPage } from '@ionic/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const onClose = () => {
  console.log('Closed.');
};
</script>

<style lang="scss" scoped></style>
