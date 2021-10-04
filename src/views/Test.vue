<template>
  <IonPage>
    <AppHeader :show-back="true" :show-close="true" title="Test page" />

    <IonContent :fullscreen="true">
      <!-- <div slot="fixed">
        <p>Fixed content</p>
      </div> -->

      <div class="page__content">
        <h1>Test page</h1>
        <p>{{ t('global.placeholder') }}</p>

        <IonButton @click="settingsStore.changeCourses(['MOS-TINF19A', 'MOS-TINF19B'])"
          >Set course</IonButton
        >
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import { useSettingsStore } from '@/store/settings';
import { IonButton, IonContent, IonPage } from '@ionic/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const settingsStore = useSettingsStore();
</script>

<style lang="scss" scoped></style>
