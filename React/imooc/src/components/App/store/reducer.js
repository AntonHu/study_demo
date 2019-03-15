import { ADD,SUB } from './type.js'

const defaultState = {
    num: 0
}

export default (state = defaultState, action) => {
    switch(action.type){
        case ADD:
            return {...state, num: state.num++};
        case SUB:
            return {...state, num: state.num--};
        default: 
            return {...state, num: 10}
    }
}