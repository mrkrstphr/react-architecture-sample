import React from 'react';
import { Switch } from 'react-router-dom';
import { routes as banking } from 'module/banking';
import { routes as customers } from 'module/customers';
import { routes as dashboard } from 'module/dashboard';
import { routes as orders } from 'module/orders';
import { routes as users } from 'module/users';

export default () => (
  <Switch>
    {dashboard}
    {banking}
    {customers}
    {orders}
    {users}
  </Switch>
);
