import { combineReducers } from 'redux'
// import userReducer from './userReducer'
import currentUser from './currentUser'
const rootReducer = combineReducers({
    // users: userReducer,
    currentUser
})

export default rootReducer