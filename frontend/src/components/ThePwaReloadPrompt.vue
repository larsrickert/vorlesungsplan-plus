<template>
  <div v-if="needRefresh" class="pwa-toast" role="alert">
    <div class="message">
      <span> {{ t("pwa.newContentAvailable") }} </span>
    </div>

    <IonButton size="small" @click="updateServiceWorker()">{{ t("pwa.reload") }}</IonButton>
    <IonButton size="small" @click="close">{{ t("global.close") }}</IonButton>
  </div>
</template>

<script setup lang="ts">
import { IonButton } from "@ionic/vue";
import { useRegisterSW } from "virtual:pwa-register/vue";
import { useI18n } from "vue-i18n";

const { needRefresh, updateServiceWorker } = useRegisterSW();

const close = async () => {
  needRefresh.value = false;
};

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid var(--ion-border-color);
  border-radius: var(--app-border-radius);
  z-index: 1;
  text-align: left;
  box-shadow: var(--app-box-shadow);
  background-color: var(--ion-background-color);
  color: var(--ion-text-color);

  .message {
    margin-bottom: 8px;
  }
}
</style>
