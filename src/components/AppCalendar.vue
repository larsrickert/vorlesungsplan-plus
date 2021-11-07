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
        <div class="event">
          <p
            v-for="attr in attributes"
            :key="attr.key"
            class="event__name"
            :class="{ today: attr.key === 'today' }"
          >
            <span v-if="attr.key !== 'today'">
              {{ attr.customData ? attr.customData.name : 'N/A' }}</span
            >
            <span v-else>{{ t('global.today') }}</span>
          </p>
        </div>
      </div>
    </template>
  </Calendar>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { Calendar } from 'v-calendar';
import { useI18n } from 'vue-i18n';
import { useEventStore } from '../store/events';

const { t } = useI18n();

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
}

.event {
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: auto;

  &__name {
    background-color: var(--ion-color-danger);
    color: #ffffff;
    border-radius: var(--app-border-radius);

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
