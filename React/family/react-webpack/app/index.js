import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,HashRouter,MemoryRouter,Route,Switch,Redirect} from 'react-router-dom'
import Main from './main'
import First from './first'
import Second from './second'
import Navigation from './navigation'
import Error from './error'

ReactDOM.render(
    <HashRouter basename="demo" forceRefresh={false}>
        <div>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/first" component={First} />
                <Route path="/second/:param/:aaa" component={Second} />
                <Redirect from="/redirect" to="/first" />
                <Route component={Error} />
            </Switch>
        </div>
    </HashRouter>
    ,
    document.getElementById('app')
)