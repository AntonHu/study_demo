import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'

@connect(
    state => state
)
class Auth extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <h2>Auth Page</h2>
        )
    }
}

export default Auth