<template>
  <IonHeader mode="md">
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton v-if="!showBack" color="primary" />
        <IonBackButton v-else color="primary" default-href="/" :icon="chevronBack" />
      </IonButtons>

      <IonTitle>{{ title }}</IonTitle>

      <IonButton
        @click="emit('close')"
        v-if="showClose"
        class="close"
        slot="end"
        fill="clear"
        shape="round"
        size="large"
      >
        <IonIcon :icon="closeIcon" />
      </IonButton>
    </IonToolbar>
  </IonHeader>
</template>

<script setup lang="ts">
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { chevronBack, close as closeIcon } from 'ionicons/icons';
import { defineEmits, defineProps } from 'vue';

defineProps({
  /** Header title. */
  title: String,
  /** If true, back button will be displayed instead of menu button. */
  showBack: Boolean,
  /** If true, close ("x") button will be displayed at the end of the header. */
  showClose: Boolean,
});

const emit = defineEmits<{
  (event: 'close'): void;
}>();
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

ion-header {
  box-shadow: $box-shadow;
  border-bottom: 1px solid var(--ion-border-color);

  &::after {
    display: none;
  }

  .close {
    --padding-start: 10px;
    --padding-end: 10px;
    --padding-bottom: 10px;
    --padding-top: 10px;
    width: 48px;
    height: 48px;
  }
}
</style>
