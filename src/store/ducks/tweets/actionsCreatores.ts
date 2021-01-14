import { Action } from "redux";
import { TweetActionsType } from "../tweet/actionTypes";
import { FetchTweetsActionInterface, SetTweetsActionInterface, SetTweetsLoadingStatusActionInterface, TweetsActionsType,  FetchAddTweetActionInterface, AddTweetActionInterface, SetAddFormStateActionInterface } from "./actionTypes";
import { AddFormState, LoadingStatus, Tweet, TweetsState } from "./contracts/state";

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface  => ({
    type: TweetsActionsType.SET_TWEETS,
    payload
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload
});

export const fetchAddTweet = (payload: {text: string, images: string[]}): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload
});

export const fetchTweets = (): FetchTweetsActionInterface  => ({
    type: TweetsActionsType.FETCH_TWEETS,
});

export const setTweetsLoadingStatus = (payload: LoadingStatus): SetTweetsLoadingStatusActionInterface  => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload
});

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface  => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload
});






