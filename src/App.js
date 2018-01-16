import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './authentication/LoginPage';
import SignUpPage from './authentication/SignUpPage';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import FlashMessagesList from './components/FlashMessagesList';
import requireAuth from './utils/requireAuth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FlashMessagesList/>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
          <Route exact path='/signup' component={SignUpPage}/>
          <Route exact path='/dashboard' component={requireAuth(Home)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
