import React from 'react';

import { SignIn } from 'auth';
import { makeLocalStorageAdapter } from 'shared';

import { makeHttpAuthenticationService } from '../services';

export function makeSignIn() {
  return (
    <SignIn
      authentication={makeHttpAuthenticationService()}
      setStorage={makeLocalStorageAdapter()}
    />
  );
}
