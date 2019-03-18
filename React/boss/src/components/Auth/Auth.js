import React,{ Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Button } from 'antd-mobile'

@connect(
    state => state.auth,
    { login }
)
class Auth extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null }
                <h2>你没有权限，需要登录才能查看！</h2>
                <Button onClick={this.props.login}>登录</Button>
            </div>
        )
    }
}

export default Auth