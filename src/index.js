import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import Store from './store';
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'



const StoreInstance = Store(
  // (state={}) =>state,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={StoreInstance}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);