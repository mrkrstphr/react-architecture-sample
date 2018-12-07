import React from 'react';
import { Link } from 'react-router-dom';
import { components } from 'module/core';

const {
  SimpleTable: { Table, Cell },
} = components;

export default () => (
  <div>
    <h2>Customers</h2>
    <Table>
      <thead>
        <tr>
          <Cell as="th">No.</Cell>
          <Cell as="th">Customer</Cell>
          <Cell as="th">Region</Cell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Cell>3232</Cell>
          <Cell>
            <Link to="/customers/3232">American Flag &amp; Oil</Link>
          </Cell>
          <Cell>East</Cell>
        </tr>
        <tr>
          <Cell>5252</Cell>
          <Cell>
            <Link to="/customers/5252">Roscoe Foods</Link>
          </Cell>
          <Cell>East</Cell>
        </tr>
        <tr>
          <Cell>1422</Cell>
          <Cell>
            <Link to="/customers/1422">West Coast Riders</Link>
          </Cell>
          <Cell>South</Cell>
        </tr>
      </tbody>
    </Table>
  </div>
);
