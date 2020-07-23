import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header title="My Two Cents"></Header>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
