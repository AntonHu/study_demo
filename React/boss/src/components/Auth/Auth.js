import React,{ Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login,getUserData } from './Auth.redux'
import { Button } from 'antd-mobile'

@connect(
    state => state.auth,
    { login,getUserData }
)
class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }
    render(){
        return (
            <div>
                <h2>我的名字是：{ this.props.user }，年龄：{ this.props.age }</h2>
                { this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null }
                <h2>你没有权限，需要登录才能查看！</h2>
                <Button type="primary" onClick={this.props.login}>登录</Button>
            </div>
        )
    }
    componentDidMount(){
        this.props.getUserData()
    }
}

export default Auth