import { HttpAuthenticationService } from 'auth/data';
import { makeAxiosHttpClient } from 'shared';

export function makeHttpAuthenticationService() {
  return new HttpAuthenticationService(makeAxiosHttpClient());
}
