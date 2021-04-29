export interface GetStorage {
  get<T>(key: string): Promise<T | null>;
}
