import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { makeSignIn } from 'auth';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeSignIn} />
      </Switch>
    </BrowserRouter>
  );
}
