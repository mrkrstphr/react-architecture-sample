import React from 'react';
import { Route } from 'react-router-dom';
import { makeAsyncLoader } from 'lib';

const Users = makeAsyncLoader({
  loader: () => import('./pages/Users'),
});

const routes = [
  <Route path="/users" key="route--users" exact component={Users} />,
];

export { routes };
