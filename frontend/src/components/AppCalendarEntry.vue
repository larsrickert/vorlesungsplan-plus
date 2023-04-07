<template>
  <div>
    <p class="event__name" :class="{ today: isToday }" @click="setOpen(true, $event)">
      <span v-if="isToday">{{ t('global.today') }}</span>
      <span v-else> {{ title }}</span>
    </p>
    <IonPopover
      v-if="start || end"
      :is-open="isOpenRef"
      css-class="app-popover app-popover--large app-popover--scroll"
      :event="event"
      :translucent="false"
      :show-backdrop="false"
      @didDismiss="setOpen(false)"
    >
      <div class="popover">
        <h5 class="popover__title">
          <span v-if="isToday">{{ t('global.today') }}</span>
          <span v-else> {{ title || 'N/A' }}</span>
        </h5>

        <div class="flex">
          <IonIcon :icon="time" />
          <p>{{ formattedDate }}</p>
        </div>

        <div v-if="location" class="flex">
          <IonIcon :icon="locationIcon" />
          <p>{{ location }}</p>
        </div>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-if="description" class="popover__description" v-html="sanitizeHtml(description)"></p>
      </div>
    </IonPopover>
  </div>
</template>

<script lang="ts" setup>
import { IonIcon, IonPopover } from '@ionic/vue';
import { location as locationIcon, time } from 'ionicons/icons';
import sanitizeHtml from 'sanitize-html';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

interface CalendarEntryProps {
  isToday?: boolean;
  title?: string;
  start?: Date;
  end?: Date;
  description?: string;
  location?: string;
}

const props = defineProps<CalendarEntryProps>();

const { t, d } = useI18n();

const isOpenRef = ref(false);
const event = ref<MouseEvent | undefined>();
const setOpen = (state: boolean, ev?: MouseEvent) => {
  event.value = ev;
  isOpenRef.value = state;
};

const formattedDate = computed(() => {
  if (!props.start && !props.end) return '';

  const start = props.start ? d(props.start, 'dateTime') : '';
  const end = props.end ? d(props.end, 'dateTime') : '';

  if (props.start && props.end) {
    let isSameDay = d(props.start, 'date') === d(props.end, 'date');
    if (!isSameDay) {
      // some events are full day so the end time is already the next day at 00:00
      const end = new Date(props.end);
      end.setDate(end.getDate() - 1);
      isSameDay = d(props.start, 'date') === d(end, 'date');
    }

    const start = d(props.start, 'dateTime');

    const startTime = d(props.start, 'time');
    const endTime = d(props.end, 'time');

    if (startTime === endTime) {
      return startTime !== '00:00'
        ? t('global.date', { value: startTime })
        : d(props.start, 'date');
    }

    return t('global.dateRange', {
      start,
      end: isSameDay ? endTime : d(props.end, 'dateTime'),
    });
  }

  if (start) return t('global.date', { value: start });
  if (end) return t('global.date', { value: end });
  return '';
});
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
      cursor: default;
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
