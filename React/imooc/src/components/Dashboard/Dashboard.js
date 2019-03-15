import React,{ Component } from 'react'
import { Link, Route } from 'react-router-dom'
import App from '../App/App'

function Two(){
    return <h2>two page</h2>
}
function Three(){
    return <h2>three page</h2>
}

class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/dashboard'>one</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/two'>two</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/three'>three</Link>
                    </li>
                </ul>
                <Route path='/dashboard' exact component={App}></Route>
                <Route path='/dashboard/two' component={Two}></Route>
                <Route path='/dashboard/three' component={Three}></Route>
            </div>
        )
    }
}

export default Dashboard