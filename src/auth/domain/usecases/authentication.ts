import { Credentials, User } from '../models';

export interface Authentication {
  execute(credentials: Credentials): Promise<User>;
}
