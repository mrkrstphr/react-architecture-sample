import React from 'react';
import { Link } from 'react-router-dom';
import { components } from 'module/core';

const {
  SimpleTable: { Table, Cell },
} = components;

export default () => (
  <div>
    <h2>Orders</h2>
    <Table>
      <thead>
        <tr>
          <Cell as="th">No.</Cell>
          <Cell as="th">Customer</Cell>
          <Cell as="th" right>
            Total
          </Cell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Cell>1241241</Cell>
          <Cell>
            <Link to="/orders/1241241">American Flag &amp; Oil</Link>
          </Cell>
          <Cell right>$ 15.52</Cell>
        </tr>
        <tr>
          <Cell>234321</Cell>
          <Cell>
            <Link to="/orders/234321">Roscoe Foods</Link>
          </Cell>
          <Cell right>$ 1,313.32</Cell>
        </tr>
        <tr>
          <Cell>167113</Cell>
          <Cell>
            <Link to="/orders/167113">West Coast Riders</Link>
          </Cell>
          <Cell right>$ 145.50</Cell>
        </tr>
      </tbody>
    </Table>
  </div>
);
