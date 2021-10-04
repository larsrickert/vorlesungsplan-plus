<template>
  <div class="block">
    <ion-label class="block__heading"> {{ d(date, 'date') }} </ion-label>

    <!-- items -->
    <AppLecture v-for="lecture of lectures" :key="lecture.uids.join(',')" :lecture="lecture" />
  </div>
</template>

<script lang="ts" setup>
import AppLecture from '@/components/AppLecture.vue';
import { MergedLecture } from '@/types/lectures';
import { IonLabel } from '@ionic/vue';
import { PropType } from '@vue/runtime-core';
import { useI18n } from 'vue-i18n';

defineProps({
  date: {
    type: Date,
    required: true,
  },
  lectures: {
    type: Array as PropType<MergedLecture[]>,
    required: true,
  },
});

const { d } = useI18n();
</script>

<style lang="scss" scoped>
.block {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 30px;
  background: var(--app-color-grey-light);

  &__heading {
    display: block;
    color: var(--ion-color-primary);
    font-size: 18px;
    padding: 20px;
    border-bottom: 1px solid var(--ion-border-color);
  }

  .lecture {
    &:nth-child(even) {
      background: var(--app-color-grey-medium);
    }
  }
}
</style>
