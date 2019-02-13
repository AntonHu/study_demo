import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {
    getInputChangeAction,
    getAddItemAction,
    getDelItemAction
} from '../store/actionCreators'

const TodoList = (props)=>{
    const {
        inputValue,
        list,
        changeInputValue,
        addTodoItem,
        delTodoItem
    } = props
    return (
        <div>
            <div>
                <h1>{inputValue}</h1>
                <input onChange={changeInputValue} value={inputValue} />
                <button onClick={addTodoItem}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>(
                        <li key={index} onClick={()=>{delTodoItem(index)}}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeInputValue(e){
            const action=getInputChangeAction(e.target.value)
            dispatch(action)
        },
        addTodoItem(){
            const action=getAddItemAction()
            dispatch(action)
        },
        delTodoItem(index){
            const action=getDelItemAction(index)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)