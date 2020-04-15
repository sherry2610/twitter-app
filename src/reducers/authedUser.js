import {SET_AUTH_ID} from '../actions/authedUser'

export default function authedUser (state = null,action){
    switch(action.type){
        case SET_AUTH_ID:
            return {
                ...state,
                ...action.id
            }
        default:
            return state
    }
}