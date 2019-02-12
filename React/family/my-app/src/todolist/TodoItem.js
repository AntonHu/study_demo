import React,{Component} from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handlerClick=this.handlerClick.bind(this)
    }
    handlerClick(){
        const {deleteItem,i} = this.props
        deleteItem(i)
    }
    componentWillReceiveProps(){
        console.log('TodoItem receive props')
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.content !== this.props.content
    }
    render(){
        const { content,test } = this.props
        return (
            <li 
                onClick={this.handlerClick} 
                dangerouslySetInnerHTML={{__html:`${test}-${content}`}}>
            </li>
        )
    }
}

export default TodoItem