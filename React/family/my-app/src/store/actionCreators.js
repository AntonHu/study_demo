import axios from 'axios'
import { 
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DEL_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes'

export const getInputChangeAction = (value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = ()=>({
    type:ADD_TODO_ITEM
})

export const getDelItemAction = (index)=>({
    type:DEL_TODO_ITEM,
    index
})

export const initListAction = (data)=>({
    type:INIT_LIST_ACTION,
    data
})

export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('/api/todolist').then((res)=>{
            const data = res.data
            const action = initListAction(data)
            dispatch(action)
        }).catch((err)=>{
            console.info(err)
        })
    }
}

export const getInitList = (data)=>({
    type:GET_INIT_LIST,
    data
})