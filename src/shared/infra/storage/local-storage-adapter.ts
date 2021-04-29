import {
  ClearStorage,
  GetStorage,
  RemoveStorage,
  SetStorage
} from 'shared/data';

export class LocalStorageAdapter
  implements SetStorage, GetStorage, ClearStorage, RemoveStorage {
  async get<T>(key: string): Promise<T | null> {
    const item = localStorage.getItem(key);

    if (!item) return null;

    return JSON.parse(item);
  }

  async clear(): Promise<void> {
    localStorage.clear();
  }

  async remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }

  async set<T>(key: string, value: T): Promise<void> {
    const valueParsed = JSON.stringify(value);

    localStorage.setItem(key, valueParsed);
  }
}
