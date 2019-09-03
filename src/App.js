import React, { Component, Fragment } from 'react';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">  
      <BrowserRouter>
      <Fragment>
        <Header />
        <Router />
      </Fragment>
      </BrowserRouter>
    </div>
  );

}

export default App;
