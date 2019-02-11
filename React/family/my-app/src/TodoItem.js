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
    render(){
        const { content } = this.props
        return (
            <li 
                onClick={this.handlerClick} 
                dangerouslySetInnerHTML={{__html:content}}>
            </li>
        )
    }
}

export default TodoItem