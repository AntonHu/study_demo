import { 
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DEL_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes'

const defaultState = {
    inputValue: 'default input content',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
    ]
}

//reducer不可修改 state
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type === DEL_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type === INIT_LIST_ACTION || action.type === GET_INIT_LIST){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

    console.log(state)
    return state
}