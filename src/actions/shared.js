import { getInitialData } from '../utils/api'
import {receiveTweets} from '../actions/tweets'
import {receiveUsers} from '../actions/users'
import {setAuthedUser} from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export default function handleInitialData(){
    return (dispatch)=>{
        getInitialData()
        .then(({users,tweets})=>{
            dispatch(receiveTweets(tweets))
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}