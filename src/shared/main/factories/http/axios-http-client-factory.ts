import { AxiosHttpClient } from 'shared/infra';

export function makeAxiosHttpClient() {
  return new AxiosHttpClient();
}
