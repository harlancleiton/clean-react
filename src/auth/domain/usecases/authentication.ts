import { Credentials, Login } from '../models';

export interface Authentication {
  execute(credentials: Credentials): Promise<Login>;
}
