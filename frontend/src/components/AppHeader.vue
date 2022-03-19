<template>
  <IonHeader class="header" mode="md">
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton v-if="!showBack && !showClose" />
        <IonBackButton v-if="showBack" default-href="/" :icon="chevronBack" />
      </IonButtons>

      <IonTitle>{{ title }}</IonTitle>

      <div slot="end">
        <slot></slot>
      </div>

      <IonButton
        v-if="showClose"
        slot="end"
        class="close"
        fill="clear"
        shape="round"
        size="large"
        @click="emit('close')"
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

interface HeaderProps {
  /** Header title. */
  title: string;
  /** If true, back button will be displayed instead of menu button. */
  showBack?: boolean;
  /** If true, close ("x") button will be displayed at the end of the header. */
  showClose?: boolean;
}

defineProps<HeaderProps>();

const emit = defineEmits<{
  (event: 'close'): void;
}>();
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixin.scss';

.header {
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.25);
  background: var(--ion-color-primary);
  background: linear-gradient(
    90deg,
    var(--ion-color-primary) 0%,
    var(--ion-color-secondary) 50%,
    var(--ion-color-tertiary) 100%
  );
  border-radius: 0 0 40px 40px;
  padding: 10px;

  ion-toolbar {
    color: #ffffff;
    --background: transparent;
  }

  ion-title {
    font-size: 18px;

    @include breakpoint(s) {
      font-size: 17px;
    }
  }

  ion-buttons,
  ion-button {
    --color: #ffffff;
  }

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
