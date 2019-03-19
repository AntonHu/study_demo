import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from '../../store/user.redux'
import { connect } from 'react-redux'

@withRouter
@connect(
    state => state.user,
    {loadData}
)
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = ['/login','/register']
        const pathname = this.props.location.patchname
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        //获取用户信息
        axios.get('/user/info').then(res => {
            if(res.status == 200){
                if(res.data.code === 0){
                    console.log(this.props)
                    //有登录信息
                    this.props.loadData(res.data.data)
                }else {
                    console.log('无登陆')
                    this.props.history.push('/login')
                }
            }
        }).catch(err => {
            console.log(err)
        })
    }
    render(){
        return null
    }
}

export default AuthRoute