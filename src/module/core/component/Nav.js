import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link to="/">Home</Link> | <Link to="/banking">Banking</Link> |{' '}
    <Link to="/customers">Customers</Link> | <Link to="/orders">Orders</Link> |{' '}
    <Link to="/users">Users</Link>
  </div>
);
