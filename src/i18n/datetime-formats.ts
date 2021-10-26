import { DateTimeFormat, DateTimeFormats } from '@intlify/core-base';

const formats: DateTimeFormat = {
  date: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  },
  dateTime: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  },
};

const dateTimeFormats: DateTimeFormats = {
  de: {
    ...formats,
    time: {
      hour: '2-digit',
      minute: '2-digit',
    },
  },
  en: {
    ...formats,
    time: {
      hour: 'numeric',
      minute: '2-digit',
    },
  },
};

export default dateTimeFormats;
