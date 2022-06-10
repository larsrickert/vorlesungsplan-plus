<template>
  <Calendar
    class="custom-calendar"
    :masks="masks"
    :attributes="calendarAttributes"
    disable-page-swipe
    is-expanded
    :min-date="minDate"
    :max-date="maxDate"
  >
    <template #day-content="{ day, attributes }">
      <div class="day">
        <span class="day__label">{{ day.day }}</span>
        <div class="day__events">
          <AppCalendarEntry
            v-for="attr in attributes"
            :key="attr.key"
            :title="attr.customData ? attr.customData.name : 'N/A'"
            :is-today="attr.key === 'today'"
            :start="attr.customData ? attr.customData.start : undefined"
            :end="attr.customData ? attr.customData.end : undefined"
            :description="attr.customData ? attr.customData.description : ''"
          />
        </div>
      </div>
    </template>
  </Calendar>
</template>

<script lang="ts" setup>
import { Calendar } from 'v-calendar';
import { computed } from 'vue';
import { useEventStore } from '../store/events';
import AppCalendarEntry from './AppCalendarEntry.vue';

const masks = {
  weekdays: 'WWW',
};

const eventStore = useEventStore();

const calendarAttributes = computed(() => {
  const eventAttributes = eventStore.events.map((event) => {
    return {
      key: event.id,
      customData: event,
      dates: event.start,
    };
  });

  return [{ key: 'today', customData: null, dates: Date.now() }, ...eventAttributes];
});

const minDate = computed((): Date | undefined =>
  eventStore.events.length ? eventStore.events[0].start : undefined
);

const maxDate = computed((): Date | undefined => {
  const length = eventStore.events.length;
  return length ? eventStore.events[length - 1].end : undefined;
});
</script>

<style lang="scss">
@import '../styles/mixin.scss';

::-webkit-scrollbar {
  width: 0;
}
::-webkit-scrollbar-track {
  display: none;
}

.custom-calendar {
  max-width: 100%;
}

.day {
  z-index: 10;
  overflow: hidden;
  height: 100%;
  flex-direction: column;
  display: flex;

  &__label {
    font-size: 0.875rem;
  }

  &__events {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: auto;
  }
}

$day-padding-x: 5px;

.custom-calendar.vc-container {
  --day-border: 1px solid var(--ion-border-color);
  --day-border-highlight: 1px solid var(--ion-border-color);
  --day-width: 100vw / 7 - 14 * $day-padding-x;
  --day-height: 90px;
  --weekday-bg: var(--app-color-grey-dark);
  --weekday-border: 1px solid var(--ion-border-color);
  border-radius: var(--app-border-radius-l);
  width: 100%;
  border-color: var(--ion-border-color);
  color: var(--ion-text-color);
  background-color: var(--ion-background-color);

  @include breakpoint(m) {
    --day-height: 60px;
  }

  & .vc-header {
    background-color: var(--app-color-grey-medium);
    padding: 10px 0;
    border-radius: var(--app-border-radius-l) var(--app-border-radius-l) 0 0;

    & .vc-title {
      color: var(--ion-text-color);
    }
  }

  & .vc-arrow {
    color: var(--ion-text-color);

    &:hover {
      background: rgba(var(--ion-text-color-rgb), 0.1);
    }
  }

  & .vc-nav-popover-container {
    background-color: var(--app-color-grey-medium);
    border-color: var(--ion-border-color);
    color: var(--ion-text-color);

    .vc-nav-item {
      &.is-active {
        background: rgba(var(--ion-text-color-rgb), 0.05);
      }
    }

    .vc-nav-item,
    .vc-nav-title,
    .vc-nav-arrow {
      color: var(--ion-text-color);

      &:hover {
        background: rgba(var(--ion-text-color-rgb), 0.05);
      }
    }
  }

  & .vc-weeks {
    padding: 0;
  }

  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
    color: var(--ion-text-color);
  }

  & .vc-day {
    padding: 0 $day-padding-x 3px $day-padding-x;
    text-align: left;
    height: var(--day-height);
    width: var(--day-width);
    background-color: var(--app-color-grey-light);
    overflow-y: hidden;

    &.weekday-1,
    &.weekday-7 {
      background-color: var(--app-color-grey-medium);
    }

    &:not(.on-bottom) {
      border-bottom: var(--day-border);

      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }

    &:not(.on-right) {
      border-right: var(--day-border);
    }

    &.on-bottom {
      &.on-left {
        border-bottom-left-radius: var(--app-border-radius-l);
      }

      &.on-right {
        border-bottom-right-radius: var(--app-border-radius-l);
      }
    }
  }

  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
