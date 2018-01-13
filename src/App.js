import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './authentication/LoginPage';

import Cart from './components/cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">    
        
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
        <div className="App-intro">
          <Cart />
        </div>
        <LoginPage/>
      </div>
    );
  }
}

export default App;