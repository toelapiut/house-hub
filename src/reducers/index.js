import cart from './cart';
import { combineReducers } from 'redux';
import flashMessages from './flashMessages'
import auth from './auth'

const rootReducer = combineReducers({
    cart,
    flashMessages,
    auth
});

export default rootReducer;
