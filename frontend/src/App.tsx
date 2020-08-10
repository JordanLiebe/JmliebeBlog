import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import SearchPage from './components/pages/SearchPage';
import SignInPage from './components/pages/SignInPage';

import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import AuthProvider from './components/functional/AuthProvider';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header title="My Two Cents" />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/signin" component={SignInPage} />
          </Switch>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
