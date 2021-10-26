<template>
  <IonFab slot="fixed" :title="title" horizontal="end" vertical="bottom" @click="onClick">
    <IonFabButton :disabled="disabled" :class="{ disabled }">
      <IonIcon :icon="icon" />
    </IonFabButton>
  </IonFab>
</template>

<script setup lang="ts">
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  disabled: Boolean,
  title: String,
});

const emit = defineEmits<{
  (event: 'click', ev: MouseEvent): void;
}>();

const onClick = (ev: MouseEvent) => {
  if (props.disabled) return;
  emit('click', ev);
};
</script>

<style lang="scss" scoped>
ion-fab {
  margin: 4px;

  .disabled {
    opacity: 1;
    filter: grayscale(1);
  }
}
</style>
