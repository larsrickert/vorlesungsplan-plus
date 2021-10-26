<template>
  <IonPage>
    <AppHeader show-close :title="t('settings.selectCourses')" @close="modalController.dismiss()" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <p>{{ t('global.placeholder') }}</p>
        <pre>{{ courses }}</pre>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonPage, modalController } from '@ionic/vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import axiosInstance from '../axios';
import AppHeader from '../components/AppHeader.vue';

const { t } = useI18n();

const courses = ref<string[]>([]);

axiosInstance.get<string[]>('courses').then((response) => {
  courses.value = response.data;
});
</script>

<style lang="scss" scoped></style>
