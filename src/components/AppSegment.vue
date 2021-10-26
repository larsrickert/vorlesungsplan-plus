<template>
  <IonSegment v-model="value" scrollable mode="ios">
    <IonSegmentButton v-for="option of options" :key="option.value" :value="option.value">
      {{ option.name }}
    </IonSegmentButton>
  </IonSegment>
</template>

<script lang="ts" setup>
import { IonSegment, IonSegmentButton } from '@ionic/vue';
import { computed, PropType } from 'vue';
import { SelectOption } from '../types/misc';

const props = defineProps({
  options: {
    type: Array as PropType<SelectOption[]>,
    required: true,
  },
  modelValue: String,
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const value = computed({
  get: (): string => props.modelValue ?? '',
  set: (value: string) => emit('update:modelValue', value),
});
</script>

<style lang="scss" scoped>
ion-segment {
  border-radius: 50px;
  margin-bottom: 40px;

  ion-segment-button {
    --indicator-color: var(--ion-color-primary);
    --color-checked: #fff;
    margin: 0;
    --border-radius: 50px;
    min-width: auto;

    --padding-top: 8px;
    --padding-bottom: 8px;
    --padding-start: 8px;
    --padding-end: 8px;
  }
}
</style>
