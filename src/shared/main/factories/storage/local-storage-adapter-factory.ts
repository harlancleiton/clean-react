import { LocalStorageAdapter } from 'shared/infra';

export function makeLocalStorageAdapter() {
  return new LocalStorageAdapter();
}
