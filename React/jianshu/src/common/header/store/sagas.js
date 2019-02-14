import { takeEvery,put } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'
import axios from 'axios'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getSearchPopularList() {
    try{
        const res = yield axios.get('./api/searchPopularList.json')
        const action = actionCreators.getSearchPopularListAction(res.data)
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
    yield takeEvery(actionTypes.SEARCH_POPULAR_LIST, getSearchPopularList);
}

export default mySaga