import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import Store from './store';
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './rootReducer'
import setAuthorizationToken from './utils/setAuthorizationToken'
import { setCurrentUser } from './actions/authActions';
import {loadHome} from './actions/dashboardActions'
const StoreInstance = Store(
// const StoreInstance = createStore(

  // (state={}) =>state,
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken)
  console.log('setting authrorization header')
  StoreInstance.dispatch(setCurrentUser(localStorage.jwtToken))
  // StoreInstance.dispatch(loadHome())
}

ReactDOM.render(
  <Provider store={StoreInstance}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
