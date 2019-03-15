import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const reduxDevtools = window.devToolsExtension?window.devToolsExtension():compose;
const store = createStore(
    reducer, 
    compose(
        applyMiddleware(thunk),
        reduxDevtools
    )
)

export default store