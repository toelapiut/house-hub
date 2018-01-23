import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './authentication/LoginPage';
import SignUpPage from './authentication/SignUpPage';
import Navbar from './components/Navbar';
import { Switch, Route,Router } from 'react-router-dom';
import Home from './components/Home';
import FlashMessagesList from './components/FlashMessagesList';
import requireAuth from './utils/requireAuth';
import Error404 from './components/Error404';
import Landing from './components/Landing'
import Charts from './components/Charts'
import Routes from "./routes";
class App extends Component {
  render() {
    return (
      <Routes/>
      // <div className="App">
      //   {/* <FlashMessagesList/> */}
      //   <FlashMessagesList/>
      //   <Switch>
      //     <Route exact path='/' component={Landing}/>
      //     <Route exact path='/signup' component={SignUpPage}/>
      //     <Route path='/dashboard' component={requireAuth(Home)}/>
      //       {/* <Route exact path='/charts' component={requireAuth(Charts)}/> */}
            
      //     <Route component={Error404} />
      //   </Switch>
      //   </div>
    );
  }
}

export default App;
