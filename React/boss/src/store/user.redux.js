import axios from "axios";
import {getRedirectPath} from '../util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'

const defaultState = {
    redirectTo: '',
    isAuth: false,
    msg: '',
    user: '',
    type: ''
}

export default (state = defaultState, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state, msg:'', redirectTo:getRedirectPath(action.payload), isAuth:true, ...action.payload}
        case LOGIN_SUCCESS:
            return {...state, msg:'', redirectTo:getRedirectPath(action.payload), isAuth:true, ...action.payload}
        case LOAD_DATA:
            return { ...state, redirectTo:getRedirectPath(action.payload), ...action.payload }
        case ERROR_MSG:
            return {...state, msg:action.msg, isAuth:false}
        default:
            return state
    }
}

function registerSuccess(data){
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

function errorMsg(msg){
    return { msg, type:ERROR_MSG }
}

export function register({user, pwd, repeatpwd, type}){
    if(!user || !pwd || !repeatpwd || !type) {
        return errorMsg('用户密码必须输入')
    }
    if(pwd != repeatpwd){
        return errorMsg('密码和确认密码不同')
    }
    return dispatch => {
        axios.post('/user/register',{user,pwd,type}).then(res => {
            if(res.status == 200 && res.data.code === 0){
                dispatch(registerSuccess({user,pwd,type}))
            }else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

function loginSuccess(data){
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function login({user, pwd}){
    if(!user || !pwd){
        return errorMsg('用户密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login',{user,pwd}).then(res => {
            if(res.status == 200 && res.data.code === 0){
                dispatch(loginSuccess({user,pwd,type:res.data.data.type}))
            }else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function loadData(userInfo){
    return {
        type: LOAD_DATA,
        payload: userInfo
    }
}