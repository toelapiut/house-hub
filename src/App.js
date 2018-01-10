import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './authentication/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage/>
      </div>
    );
  }
}

export default App;
