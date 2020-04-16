import { saveLikeToggle } from "../utils/api";

export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export function receiveTweets(tweet) {
  return {
    type: RECEIVE_TWEETS,
    tweet,
  };
}

function toggleTweet ({authedUser,hasLiked,id}){
  return {
    type:TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  }
}

export function handleToggleTweet(info){
 return (dispatch)=>{
   dispatch(toggleTweet(info))

   return saveLikeToggle(info)
    .catch((e)=>{
      console.warn("Error in handleToggle: ", e)
      dispatch(toggleTweet(info))
      alert('There was an error liking this tweet. try again')
    })
 } 
}
