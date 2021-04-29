import { Authentication } from 'auth';
import { SetStorage } from 'shared';

export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignInProps {
  authentication: Authentication;
  setStorage: SetStorage;
}
