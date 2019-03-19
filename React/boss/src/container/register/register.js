import React,{ Component } from 'react'
import Logo from '../../components/logo/logo'
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile'
import {connect} from 'react-redux'
import { register } from '../../store/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
    state => state.user,
    {register}
)
class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type: 'genuis'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]: val
        })
    }
    handleRegister(){
        this.props.register(this.state)
        console.log(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem
        return (
            <div>
                { this.props.redirectTo? <Redirect to={this.props.redirectTo}/>:null }
                <Logo></Logo>  
                <h2>注册页面</h2> 
                <List>
                    {this.props.msg? <p className="error-msg">{this.props.msg}</p>:null}
                    <InputItem
                        onChange={v=>this.handleChange('user',v)}
                    >用户</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={v=>this.handleChange('pwd',v)}
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={v=>this.handleChange('repeatpwd',v)}
                    >确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem 
                        checked={this.state.type == 'genuis'}
                        onChange={v=>this.handleChange('type','genuis')}>
                        牛人
                    </RadioItem>
                    <RadioItem
                        checked={this.state.type == 'boss'}
                        onChange={v=>this.handleChange('type','boss')}>
                        BOSS
                    </RadioItem>
                    <WhiteSpace />
                    <Button onClick={this.handleRegister} type="primary">注册</Button>
                </List>
            </div>
        )
    }
}

export default Register