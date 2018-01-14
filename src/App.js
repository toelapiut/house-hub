import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './authentication/LoginPage';
import SignUpPage from './authentication/SignUpPage'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import FlashMessagesList from './components/FlashMessagesList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Navbar/>
        <FlashMessagesList/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/signup' component={SignUpPage}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
