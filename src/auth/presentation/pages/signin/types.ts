import { Authentication } from 'auth';

export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignInProps {
  authentication: Authentication;
}
