import React from 'react'
import ReactDom from 'react-dom'
import store from './store/index'
import './config'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './components/authroute/authroute'
import BossInfo from './container/bossInfo/bossInfo'
import './index.css'

function Boss(){
    return <h2>Boss页面</h2>
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/boss' component={Boss}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))