<template>
  <IonPage>
    <AppHeader show-back :title="t('settings.pageName')" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <div class="grid">
          <IonItem detail lines="none" class="setting" button @click="openCourseSelect">
            <IonIcon slot="start" :icon="list" />
            <span>{{ t('settings.selectCourses') }} ({{ settingsStore.courses.length }})</span>
          </IonItem>

          <IonItem lines="none" class="setting">
            <IonIcon slot="start" :icon="contrast" />
            <IonSelect
              v-model="theme"
              :ok-text="t('global.select')"
              :cancel-text="t('global.close')"
              :interface-options="{ header: t('settings.selectTheme') }"
              :placeholder="`${t('global.select')}...`"
            >
              <IonSelectOption value="light">
                {{ t('settings.themes.light') }}
              </IonSelectOption>
              <IonSelectOption value="dark">
                {{ t('settings.themes.dark') }}
              </IonSelectOption>
            </IonSelect>
          </IonItem>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonContent, IonIcon, IonItem, IonPage, IonSelect, IonSelectOption } from '@ionic/vue';
import { contrast, list } from 'ionicons/icons';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AppHeader from '../components/AppHeader.vue';
import TheCourseSelectModal from '../components/TheCourseSelectModal.vue';
import { showModal } from '../helpers/io';
import { useSettingsStore } from '../store/settings';

const { t } = useI18n();

const settingsStore = useSettingsStore();

const theme = computed({
  get: (): string => settingsStore.theme,
  set: (value: string) => settingsStore.changeTheme(value),
});

const openCourseSelect = async () => {
  await showModal({
    component: TheCourseSelectModal,
  });
};
</script>

<style lang="scss" scoped></style>
