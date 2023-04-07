import { IntlNumberFormats } from 'vue-i18n';

const numberFormats = {
  en: {
    currency: {
      style: 'currency',
      currency: 'USD',
      notation: 'standard',
    },
  },
  de: {
    currency: {
      style: 'currency',
      currency: 'EUR',
      notation: 'standard',
    },
  },
} satisfies IntlNumberFormats;

export default numberFormats;
