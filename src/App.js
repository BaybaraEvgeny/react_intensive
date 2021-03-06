import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile.js';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Route path="/" component={Feed} exact/>
              <Route path="/profile" component={Profile} exact/>
          </div>
      </Router>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  */);
}

export default App;
