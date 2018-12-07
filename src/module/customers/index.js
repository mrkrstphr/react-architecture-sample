import React from 'react';
import { Route } from 'react-router-dom';
import { makeAsyncLoader } from 'lib';

const Customers = makeAsyncLoader({
  loader: () => import('./pages/Customers'),
});

const CustomerDetails = makeAsyncLoader({
  loader: () => import('./pages/CustomerDetails'),
});

const routes = [
  <Route
    path="/customers"
    key="route--customers"
    exact
    component={Customers}
  />,
  <Route
    path="/customers/:id"
    key="route--customer-details"
    component={CustomerDetails}
  />,
];

export { routes };
