import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import HomePage from './components/pages/HomePage';
import SearchPage from './components/pages/SearchPage';

import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import Sidebar from './components/sections/Sidebar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from 'react-bootstrap/esm/Switch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title="My Two Cents" />
        <Switch
          css={css`
            padding: 0px;
          `}
        >
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
