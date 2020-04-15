export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export function receiveTweets(tweet) {
  return {
    type: RECEIVE_TWEETS,
    tweet,
  };
}
