
import { Tweet } from "../tweets/contracts/state";
import { FetchTweetActionInterface, SetTweetActionInterface, SetTweetLoadingStateActionInterface, TweetActionsType } from "./actionTypes";
import { LoadingState, TweetDataState } from "./contracts/state";

export const setTweet = (payload: TweetDataState['tweet']): SetTweetActionInterface => ({
    type: TweetActionsType.SET_TWEET,
    payload
});

export const fetchTweet = (id: string): FetchTweetActionInterface  => ({
    type: TweetActionsType.FETCH_TWEET,
    payload: id
});

export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionInterface  => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload
});

