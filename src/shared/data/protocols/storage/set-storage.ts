export interface SetStorage {
  set<T>(key: string, value: T): Promise<void>;
}
