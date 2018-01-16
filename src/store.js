
import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from  './reducers';

export default(initialState) => {
    return createStore(
      // rootReducer,
      // initialState,
      rootReducer,
        compose(
          applyMiddleware(thunk),
          window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}
