import { takeEvery,put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getInitList() {
    try{
        const res = yield axios.get('/api/todolist')
        const action = initListAction(res.data)
        yield put(action) 
    }catch(err){
        console.log(err)
    }
 }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga(){
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga