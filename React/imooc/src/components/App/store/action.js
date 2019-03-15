import { ADD,SUB } from './type'

export function add(){
    return {
        type: ADD
    }
}
export function sub(){
    return {
        type: SUB
    }
}

export function addAsync(){
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 1000)
    }
}