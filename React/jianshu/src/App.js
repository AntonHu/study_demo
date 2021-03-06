import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';
import { GlobalStyle } from './style.js';
import { GlobalInconFont } from './statics/iconfont/iconfont';
import Demo from './pages/demo'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      	<BrowserRouter>
          {/* <div>
            <Route path='/' exact component={Demo}></Route>
          </div> */}
      		<div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
      			<Route path='/detail/:id' exact component={Detail}></Route>
      		</div>
      	</BrowserRouter>
        <GlobalStyle />
        <GlobalInconFont />
      </Provider>
    );
  }
}

export default App;
