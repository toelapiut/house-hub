import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './authentication/LoginPage';

import Cart from './components/cart';
import NavBar from './components/Navbar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
          <Cart />
        </div>
        <LoginPage/>
      </div>
    );
  }
}

export default App;