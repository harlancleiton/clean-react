import React from 'react';

import { GlobalStyles } from 'shared';

import { SignIn } from './auth';

export const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyles />
    </>
  );
};
