<template>
  <IonMenuToggle auto-hide="false">
    <IonItem
      :button="!!href"
      :class="{ selected: href === $route.path }"
      class="hydrated"
      detail="false"
      lines="none"
      @click="openLink"
    >
      <IonIcon v-if="icon" slot="start" :icon="icon" />
      <IonLabel>{{ title }}</IonLabel>
    </IonItem>
  </IonMenuToggle>
</template>

<script lang="ts" setup>
import { IonIcon, IonItem, IonLabel, IonMenuToggle } from '@ionic/vue';
import { navigate } from '../helpers/misc';

interface SideMenuItemProps {
  title: string;
  href?: string;
  icon?: string;
}
const props = defineProps<SideMenuItemProps>();

const openLink = async (ev: Event) => {
  if (!props.href) {
    // do not close menu
    ev.preventDefault();
    ev.stopPropagation();
    return;
  }

  await navigate(props.href);
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
