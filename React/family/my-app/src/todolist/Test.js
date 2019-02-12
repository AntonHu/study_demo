import React,{ Component } from 'react'

class Test extends Component {
    // constructor(props){
    //     super()
    // }
    render(){
        console.log('Test render')
        return React.createElement('div',{},this.props.content)
        // return (
        //     <div>{this.props.content}</div>
        // )
    }
}

export default Test