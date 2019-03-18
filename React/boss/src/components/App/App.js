import React,{ Component } from 'react'
import { Button } from 'antd-mobile'
import { addAsync, sub } from './store/action'
import { connect } from 'react-redux'

const mapStatetoProps = state => ({num: state.app})

const actionCreators = {addAsync, sub}

@connect(mapStatetoProps, actionCreators)
class App extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {
            num,
            addAsync,
            sub
        } = this.props
        console.log(this.props)
        return (
            <div>
                <h1>{num}</h1>
                <Button onClick={addAsync}>加</Button>
                <Button onClick={sub}>减</Button>
            </div>
        )
    }
}

export default App