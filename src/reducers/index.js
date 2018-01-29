import cart from './cart';
import { combineReducers } from 'redux';
import flashMessages from './flashMessages'
import auth from './auth'
import homeData from './homeData'

const rootReducer = combineReducers({
    flashMessages,
    auth,
    homeData,
});

export default rootReducer;
