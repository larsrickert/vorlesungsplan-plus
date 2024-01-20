<template>
  <IonFab slot="fixed" :title="title" horizontal="end" vertical="bottom" @click="onClick">
    <IonFabButton :disabled="disabled" :class="{ disabled }">
      <IonIcon :icon="icon" />
    </IonFabButton>
  </IonFab>
</template>

<script setup lang="ts">
import { IonFab, IonFabButton, IonIcon } from "@ionic/vue";

interface FabProps {
  icon: string;
  disabled?: boolean;
  title?: string;
}

const props = defineProps<FabProps>();

const emit = defineEmits<{
  (event: "click", ev: MouseEvent): void;
}>();

const onClick = (ev: MouseEvent) => {
  if (props.disabled) return;
  emit("click", ev);
};
</script>

<style lang="scss" scoped>
ion-fab {
  margin: 4px 16px 4px 4px;

  .disabled {
    opacity: 1;
    filter: grayscale(1);
  }
}
</style>
