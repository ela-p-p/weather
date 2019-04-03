import { createStore, applyMiddleware } from 'redux';
import { cityReducer } from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(cityReducer, {},
    applyMiddleware(createLogger(), thunkMiddleware)
)

export default store;