import cart from './cart';
import { combineReducers } from 'redux';
import flashMessages from './flashMessages'
import auth from './auth'
import homeData from './homeData'
import overallProperty from './overallProperty'
import paymentsData from "./paymentsData";

const rootReducer = combineReducers({
    flashMessages,
    auth,
    homeData,
    overallProperty,
    paymentsData
});

export default rootReducer;
