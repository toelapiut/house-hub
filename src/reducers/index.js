import cart from './cart';
import { combineReducers } from 'redux';
import flashMessages from './flashMessages'

const rootReducer = combineReducers({
    cart,
    flashMessages
});

export default rootReducer;
