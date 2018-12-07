import React from 'react';
import { Link } from 'react-router-dom';
import { components } from 'module/core';

const {
  SimpleTable: { Table, Cell },
} = components;

export default () => (
  <div>
    <h2>Users</h2>
    <Table>
      <thead>
        <tr>
          <Cell as="th">Name.</Cell>
          <Cell as="th">Email</Cell>
          <Cell as="th">Role</Cell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Cell>
            <Link to="/users/15">Gordon, Barbara</Link>
          </Cell>
          <Cell>bgordon@gcpd.org</Cell>
          <Cell>Advisor</Cell>
        </tr>
        <tr>
          <Cell>
            <Link to="/users/15">Grayson, Richard</Link>
          </Cell>
          <Cell>rgrayson@flyinggraysons.net</Cell>
          <Cell>Understudy</Cell>
        </tr>
        <tr>
          <Cell>
            <Link to="/users/15">Wayne, Bruce</Link>
          </Cell>
          <Cell>notbatman@wayneenterprises.com</Cell>
          <Cell>Rich Guy</Cell>
        </tr>
      </tbody>
    </Table>
  </div>
);
