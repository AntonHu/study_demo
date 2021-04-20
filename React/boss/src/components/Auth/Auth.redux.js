import axios from "axios";

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'

const defaultState = {
    isAuth: false,
    user:'',
    age:0
}

export default (state = defaultState, action) => {
    switch(action.type){
        case LOGIN:
            return {...state, isAuth: true}
        case LOGOUT:
            return {...state, isAuth: false}
        case USER_DATA:
            return {
                ...state, 
                user: action.payload.user, 
                age:action.payload.age
            }
        default:
            return state
    }
}

export function login(){
    return {
        type: LOGIN
    }
}
export function logout(){
    return {
        type: LOGOUT
    }
}
export function getUserData(){
    //dispatch用来通知数据修改
    return dispatch => {
        axios.get('/data').then(res => {
            if(res.status === 200){
                dispatch(userData(res.data))
            }
        }).catch(err => {
            console.log(err)
        })
    }
}
export function userData(data){
    return {type: USER_DATA, payload: data}
}