<template>
  <div>
    <p class="event__name" :class="{ today: isToday }" @click="setOpen(true, $event)">
      <span v-if="isToday">{{ t('global.today') }}</span>
      <span v-else> {{ title }}</span>
    </p>
    <IonPopover
      :is-open="isOpenRef"
      css-class="app-popover app-popover--large"
      :event="event"
      :translucent="false"
      :show-backdrop="true"
      @didDismiss="setOpen(false)"
    >
      <div class="popover">
        <h5 class="popover__title">{{ title }}</h5>

        <div class="flex">
          <IonIcon :icon="time" />
          <p>
            {{ t('global.dateRange', { start: d(start, 'dateTime'), end: d(end, 'time') }) }}
          </p>
        </div>

        <p v-if="description" class="popover__description" v-html="sanitizeHtml(description)"></p>
      </div>
    </IonPopover>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { IonPopover, IonIcon } from '@ionic/vue';
import { ref } from 'vue';
import sanitizeHtml from 'sanitize-html';

import { time } from 'ionicons/icons';

interface CalendarEntryProps {
  isToday?: boolean;
  title: string;
  start: Date;
  end: Date;
  description: string;
}

defineProps<CalendarEntryProps>();

const { t, d } = useI18n();

const isOpenRef = ref(false);
const event = ref<MouseEvent | undefined>();
const setOpen = (state: boolean, ev?: MouseEvent) => {
  event.value = ev;
  isOpenRef.value = state;
};
</script>

<style scoped lang="scss">
@import '../styles/mixin.scss';

.event {
  &__name {
    background-color: var(--ion-color-danger);
    color: #ffffff;
    border-radius: var(--app-border-radius);
    cursor: pointer;

    padding: 0.25rem;
    margin-bottom: 0.25rem;
    margin-top: 0;
    line-height: 1.25;
    font-size: 0.75rem;

    @include breakpoint(m) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &.today {
      background-color: var(--ion-color-primary);
    }
  }
}

.popover {
  padding: 16px;

  p {
    margin: 0;
  }

  ion-icon {
    margin-right: 10px;
    font-size: 20px;
  }

  &__description {
    padding-top: 30px;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 10px;
  }
}
</style>
