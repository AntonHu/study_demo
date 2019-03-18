import React,{ Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import App from '../App/App'
import { connect } from 'react-redux'
import { logout } from '../Auth/Auth.redux'
import { Button } from 'antd-mobile'

function Two(){
    return <h2>two page</h2>
}
function Three(){
    return <h2>three page</h2>
}

@connect(
    state => state.auth,
    { logout }
)
class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const match = this.props.match
        const redirectToLogin = <Redirect to='/login'></Redirect> 
        const app = (
            <div>
                <h1>你好！{this.props.user}！</h1>
                <Button onClick={this.props.logout}>注销</Button>
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>one</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/two`}>two</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/three`}>three</Link>
                    </li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}></Route>
                <Route path={`${match.url}/two`} component={Two}></Route>
                <Route path={`${match.url}/three`} component={Three}></Route>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard