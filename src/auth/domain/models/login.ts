import { User } from './user';

export interface Login {
  accessToken: string;

  refreshToken: string;

  user: User;
}
