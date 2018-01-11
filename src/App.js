import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './authentication/LoginPage';

import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={LoginPage}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;