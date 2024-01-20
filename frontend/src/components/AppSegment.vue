<template>
  <IonSegment v-model="value" mode="ios" scrollable>
    <IonSegmentButton v-for="option of options" :key="option.value" :value="option.value">
      {{ option.name }}
    </IonSegmentButton>
  </IonSegment>
</template>

<script lang="ts" setup>
import { IonSegment, IonSegmentButton } from "@ionic/vue";
import { computed } from "vue";
import type { SelectOption } from "../types/misc";

interface SegmentProps {
  options: SelectOption[];
  modelValue?: string;
}

const props = defineProps<SegmentProps>();

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

const value = computed({
  get: (): string => props.modelValue ?? "",
  set: (value: string) => emit("update:modelValue", value),
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
    --padding-start: 16px;
    --padding-end: 16px;
  }
}
</style>
