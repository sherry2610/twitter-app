import {combineReducers} from 'redux'

import todos from './todos'
import users from './users'
import authedUser from './authedUser'


export default combineReducers({
    authedUser,
    users,
    tweets
})