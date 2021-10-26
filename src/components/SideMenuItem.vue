<template>
  <IonMenuToggle auto-hide="false">
    <IonItem
      :button="!!href"
      :class="{ selected: href === $route.path }"
      class="hydrated"
      detail="false"
      lines="none"
      @click="navigate"
    >
      <IonIcon v-if="icon" slot="start" :icon="icon" />
      <IonLabel>{{ title }}</IonLabel>
    </IonItem>
  </IonMenuToggle>
</template>

<script lang="ts" setup>
import { Browser } from '@capacitor/browser';
import { IonIcon, IonItem, IonLabel, IonMenuToggle } from '@ionic/vue';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  href: { type: String, default: '' },
  icon: { type: String, default: '' },
});

const router = useRouter();

const navigate = async (ev: Event) => {
  if (!props.href) {
    // dont close menu
    ev.preventDefault();
    ev.stopPropagation();
    return;
  }

  if (props.href.startsWith('http')) await Browser.open({ url: props.href });
  else await router.push(props.href);
};
</script>

<style lang="scss" scoped>
ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
  border-radius: 4px;
  --background: transparent;

  ion-icon {
    font-size: 24px;
    color: #616e7e;
  }

  ion-label {
    font-weight: 500;
  }

  &.selected {
    --background: rgba(var(--ion-color-primary-rgb), 0.14);
    --color: var(--ion-color-primary);

    ion-icon {
      color: var(--ion-color-primary);
    }
  }
}
</style>
