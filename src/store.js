import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducer from './Reducers/Reducer';
import mainSaga from './Sagas/MainSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// apply middleware and enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

// start root saga
sagaMiddleware.run(mainSaga);

export default store;
