import config from '@/configs';
import { getValue, StorageKey } from '@/helpers/storage';
import { i18n } from '@/i18n';
import { Device } from '@capacitor/device';

/**
 * Checks whether the given locale is available for this application.
 * @param locale Locale to check.
 * @returns true if locale is available, false otherwise.
 */
export function isLocaleAvailable(locale: string): boolean {
  return i18n.global.availableLocales.includes(locale);
}

/**
 * Get the device's current language locale code.
 *
 * @param availableOnly if true language code will be null if not available in this app.
 * If code is e.g. "de-DE" and not supported, will check if "de" is supported. Default: true
 * @returns Language code or null if code not available.
 */
export async function getDeviceLocale(availableOnly = true): Promise<string | null> {
  const { value } = await Device.getLanguageCode();
  if (!availableOnly) return value;
  if (isLocaleAvailable(value)) return value;

  // check if value is e.g. de-DE an locale de is available
  const splitted = value.split('-');
  return splitted.length > 0 && isLocaleAvailable(splitted[0]) ? splitted[0] : null;
}

/**
 * Gets locale stored in storage or device language if no locale stored. Will return default locale
 * of config file if stored or device locale is not available for this application.
 *
 * @returns Locales in priority: storage, device, default config locale.
 */
export async function getInitLocale(): Promise<string> {
  const storedLocale = await getValue<string>(StorageKey.LOCALE);
  if (storedLocale && isLocaleAvailable(storedLocale)) return storedLocale;

  const deviceLocale = await getDeviceLocale();
  return deviceLocale ?? config.i18n.defaultLocale;
}
