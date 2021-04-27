import { HttpAuthenticationService } from 'auth/data';
import { AxiosHttpClient } from 'shared';

export function makeHttpAuthenticationService() {
  const httpClient = new AxiosHttpClient();

  return new HttpAuthenticationService(httpClient);
}
