import React from 'react';
import { Route } from 'react-router-dom';
import { makeAsyncLoader } from 'lib';

const Banking = makeAsyncLoader({
  loader: () => import('./pages/Banking'),
});

const routes = [
  <Route path="/banking" key="route--banking" exact component={Banking} />,
];

export { routes };
