import type { IntlDateTimeFormat, IntlDateTimeFormats } from "vue-i18n";

const formats = {
  date: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  },
  dateFullWeekday: {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  },
  dateTime: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  },
} satisfies IntlDateTimeFormat;

const dateTimeFormats = {
  de: {
    ...formats,
    time: {
      hour: "2-digit",
      minute: "2-digit",
    },
  },
  en: {
    ...formats,
    time: {
      hour: "numeric",
      minute: "2-digit",
    },
  },
} satisfies IntlDateTimeFormats;

export default dateTimeFormats;
