import React,{ Component } from 'react'
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI'
import store from '../store'
import axios from 'axios'
import { getInputChangeAction,getAddItemAction,getDelItemAction,initListAction } from '../store/actionCreators'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
        this.handlerInputChange = this.handlerInputChange.bind(this)
        this.handlerStoreChange = this.handlerStoreChange.bind(this)
        this.handlerButtonClick = this.handlerButtonClick.bind(this)
        this.handlerItemClick = this.handlerItemClick.bind(this)
        store.subscribe(this.handlerStoreChange)
    }
    handlerInputChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handlerStoreChange(){
        console.log('store changed')
        this.setState(store.getState())
    }
    handlerButtonClick(){
        const action =getAddItemAction()
        store.dispatch(action)
    }
    handlerItemClick(index){
        // console.log(index)
        const action = getDelItemAction(index)
        store.dispatch(action)
    }
    render(){
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handlerInputChange={this.handlerInputChange}
                handlerButtonClick={this.handlerButtonClick}
                handlerItemClick={this.handlerItemClick}
            />
        )
    }
    componentDidMount(){
        axios.get('/api/todolist').then((res)=>{
            const data = res.data
            const action = initListAction(data)
            store.dispatch(action)
        }).catch((err)=>{
            console.info(err)
        })
    }
}

export default TodoList