import { createStore, applyMiddleware } from 'redux';
import { cityReducer } from './reducers/cityReducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store =  createStore(cityReducer,
    applyMiddleware(createLogger(), sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store;