import React from 'react';
import { Route } from 'react-router-dom';
import { makeAsyncLoader } from 'lib';

const Orders = makeAsyncLoader({
  loader: () => import('./pages/Orders'),
});
const OrderDetails = makeAsyncLoader({
  loader: () => import('./pages/OrderDetails'),
});

const routes = [
  <Route path="/orders" key="route--orders" exact component={Orders} />,
  <Route
    path="/orders/:id"
    key="route--order-details"
    component={OrderDetails}
  />,
];

export { routes };
