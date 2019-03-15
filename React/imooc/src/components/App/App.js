import React,{ Component } from 'react'
import { addAsync, sub } from './store/action'
import { connect } from 'react-redux'


const mapStatetoProps = (state) => ({
    num: state
})

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
        return (
            <div>
                <h1>{num}</h1>
                <button onClick={addAsync}>加</button>
                <button onClick={sub}>减</button>
            </div>
        )
    }
}

export default App