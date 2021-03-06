import { createStore,applyMiddleware,compose } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // applyMiddleware(thunk),
);

const store = createStore(
    reducer,
    enhancer
);
sagaMiddleware.run(TodoSagas)

export default store;