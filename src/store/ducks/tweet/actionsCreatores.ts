
import { LoadingStatus } from "../../types";
import { Tweet } from "../tweets/contracts/state";
import { FetchTweetActionInterface, SetTweetActionInterface, SetTweetLoadingStatusActionInterface, TweetActionsType } from "./actionTypes";
import { TweetDataState } from "./contracts/state";

export const setTweet = (payload: TweetDataState['tweet']): SetTweetActionInterface => ({
    type: TweetActionsType.SET_TWEET,
    payload
});

export const fetchTweet = (id: string): FetchTweetActionInterface  => ({
    type: TweetActionsType.FETCH_TWEET,
    payload: id
});

export const setTweetLoadingStatus = (payload: LoadingStatus): SetTweetLoadingStatusActionInterface  => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload
});

