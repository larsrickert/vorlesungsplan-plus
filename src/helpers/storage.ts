import { Storage } from '@capacitor/storage';

export enum StorageKey {
  LOCALE = 'locale',
  THEME = 'theme',
  COURSE = 'course',
}

/**
 * Gets the value for the given key from the storage. Value will be transformed with JSON.parse().
 *
 * @param key Key to get value for.
 * @returns The stored data or null if key does not exist or an error occurred.
 */
export const getValue = async <T>(key: StorageKey): Promise<T | null> => {
  const { value } = await Storage.get({ key });

  try {
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.error(`Error while JSON.parse value of ${key} from storage`, e);
    return null;
  }
};

/**
 * Sets the value for the given key to the storage. Value will be transformed with JSON.stringify().
 *
 * @param key Key to set.
 * @param value The value to set in storage with the associated key.
 */
export const setValue = async (key: StorageKey, value: unknown): Promise<void> => {
  try {
    await Storage.set({ key, value: JSON.stringify(value) });
  } catch (e) {
    console.error(`Error while setting ${key} to storage`, e);
  }
};

/**
 * Sets the value for the given key to the storage if current value is null or undefined.
 *
 * @param key Key to initialize.
 * @param value The value to set in storage with the associated key if value is not initialized yet.
 * @returns Current value if available, set init value otherwise.
 */
export const initValue = async <T>(key: StorageKey, value: T): Promise<T> => {
  const currentValue = await getValue<T>(key);
  if (currentValue == null) await setValue(key, value);
  return currentValue ?? value;
};

/**
 * Clears keys and values from storage.
 */
export const clearStorage = Storage.clear;

/**
 * Remove the value from storage for a given key, if any.
 *
 * @param key Key to remove value for.
 */
export const removeValue = async (key: StorageKey): Promise<void> => {
  try {
    await Storage.remove({ key });
  } catch (e) {
    console.error(`Error while removing ${key} from storage`, e);
  }
};

/**
 * Gets a list of known keys in storage.
 *
 * @returns Known storage keys or empty array if an error occurred.
 */
export const getKeys = async (): Promise<string[]> => {
  try {
    const { keys } = await Storage.keys();
    return keys;
  } catch (e) {
    console.error('Error while getting keys from storage', e);
    return [];
  }
};
