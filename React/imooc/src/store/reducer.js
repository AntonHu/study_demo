import { combineReducers } from 'redux'
import auth from '../components/Auth/Auth.redux'
import app from '../components/App/store/reducer'

export default combineReducers({
    auth,
    app
})