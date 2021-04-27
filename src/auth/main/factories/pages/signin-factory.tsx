import React from 'react';

import { SignIn } from 'auth';

import { makeHttpAuthenticationService } from '../services';

export function makeSignIn() {
  return <SignIn authentication={makeHttpAuthenticationService()} />;
}
