import { combineReducers } from 'redux'
// import userReducer from './userReducer'
import currentUser from './currentUser'
const rootReducer = combineReducers({
    token: localStorage.getItem("token"),
    currentUser,
    user: currentUser
})

export default rootReducer