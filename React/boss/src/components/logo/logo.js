import React,{ Component } from 'react'
import logoImg from '../../static/logo.png';
import './logo.css'

class Logo extends Component{
    render(){
        return (
            <div className="logo-container">
                <img src={logoImg} alt="logo"/>
            </div>
        )
    }
}

export default Logo