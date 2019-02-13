import React,{ Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalstyle } from './style'
import { GlobalIconfont } from './static/iconfont/iconfont'

ReactDOM.render(
    <Fragment>
        <App />
        <Globalstyle />
        <GlobalIconfont />
    </Fragment>, 
    document.getElementById('root')
);