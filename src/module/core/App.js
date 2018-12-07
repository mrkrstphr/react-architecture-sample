import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import AppStyles from './AppStyles';
import Router from './Router';

const App = () => (
  <BrowserRouter>
    <div>
      <AppStyles />
      <h1>Sample App</h1>
      <Nav />
      <Router />
    </div>
  </BrowserRouter>
);

export default App;
