import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        home
      </div>
    );
  }
  componentDidMount(){
    axios.get('/test').then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
}

export default App;
