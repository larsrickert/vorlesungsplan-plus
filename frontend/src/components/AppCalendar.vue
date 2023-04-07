<template>
  <Calendar
    class="custom-calendar"
    :masks="masks"
    :attributes="calendarAttributes"
    disable-page-swipe
    :min-date="minDate"
    :max-date="maxDate"
    expanded
    trim-weeks
  >
    <template
      #day-content="{
        day,
        attributes,
      }: {
        day: CalendarDay,
        attributes: (Omit<Attribute, 'customData'> & { customData?: DhbwEvent })[],
      }"
    >
      <div class="day">
        <span class="day__label">{{ day.day }}</span>
        <div class="day__events">
          <template v-for="attr in attributes" :key="attr.key">
            <AppCalendarEntry v-if="attr.key === 'today'" is-today />

            <AppCalendarEntry
              v-else-if="attr.customData"
              :title="attr.customData.name"
              :start="attr.customData.start"
              :end="attr.customData.end"
              :description="attr.customData.description"
              :location="attr.customData.location"
            />
          </template>
        </div>
      </div>
    </template>
  </Calendar>
</template>

<script lang="ts" setup>
import { Calendar } from 'v-calendar';
import { Attribute, AttributeConfig } from 'v-calendar/dist/types/src/utils/attribute';
import { CalendarDay } from 'v-calendar/dist/types/src/utils/page';
import 'v-calendar/style.css';
import { computed } from 'vue';
import { useEventStore } from '../store/events';
import { DhbwEvent } from '../types/events';
import AppCalendarEntry from './AppCalendarEntry.vue';

const masks = {
  weekdays: 'WWW',
};

const eventStore = useEventStore();

const calendarAttributes = computed(() => {
  const eventAttributes = eventStore.events.map<Partial<AttributeConfig>>((event) => {
    return {
      key: event.id,
      customData: event,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dates: event.start as any,
    };
  });

  return [
    { key: 'today', customData: null, dates: Date.now() },
    ...eventAttributes,
  ] as AttributeConfig[];
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

.day {
  z-index: 10;
  overflow: hidden;
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

  .vc-header {
    margin: 0;
    padding: 10px;
    box-sizing: content-box;
    border-radius: var(--app-border-radius-l) var(--app-border-radius-l) 0 0;
    background-color: var(--app-color-grey-medium);

    .vc-title {
      z-index: 10;
      color: var(--ion-text-color);
      font-size: 18px;
      background-color: transparent;
    }
  }

  .vc-arrow {
    color: var(--ion-text-color);
    background-color: transparent;

    &:hover {
      background-color: rgba(var(--ion-text-color-rgb), 0.1);
    }
  }

  .vc-weeks {
    padding: 0;
  }

  .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
    color: var(--ion-text-color);
  }

  .vc-day {
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

  .vc-day-dots {
    margin-bottom: 5px;
  }
}

.vc-nav-popover-container {
  background-color: var(--app-color-grey-medium);
  border-color: var(--ion-border-color);
  top: 76px;

  .vc-nav-item {
    &.is-active {
      background: rgba(var(--ion-text-color-rgb), 0.05);
    }
  }

  .vc-nav-item,
  .vc-nav-title,
  .vc-nav-arrow {
    color: var(--ion-text-color);
    background-color: transparent;

    &:hover {
      background-color: rgba(var(--ion-text-color-rgb), 0.05);
    }
  }
}
</style>
