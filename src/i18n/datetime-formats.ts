import { DateTimeDigital } from '@intlify/core-base';

type LocaleFormat = Record<string, DateTimeDigital | undefined>;

const formats: Record<string, LocaleFormat> = {
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
  time: {
    hour: 'numeric',
    minute: '2-digit',
  },
};

const dateTimeFormats: Record<string, Record<string, LocaleFormat>> = {
  en: formats,
  de: formats,
};

export default dateTimeFormats;
