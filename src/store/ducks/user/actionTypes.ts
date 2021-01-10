import { Action } from "redux";

import { AddFormState, LoadingState, Tweet, TweetsState } from "./contracts/state";

export enum TweetsActionsType {
    SET_TWEETS = "tweets/SET_TWEETS",
    FETCH_TWEETS = "tweets/FETCH_TWEETS",
    SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
    FETCH_ADD_TWEET = 'tweet/FETCH-ADD-TWEET',
    ADD_TWEET = 'tweet/ADD-TWEET',
    SET_ADD_FORM_STATE = 'tweet/SET_ADD_FORM_STATE',
}

export interface SetTweetsActionInterface {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState["items"];
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetTweetsLoadingStateActionInterface
    extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export interface SetAddFormStateActionInterface
    extends Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_STATE;
    payload: AddFormState;
}

export interface FetchAddTweetActionInterface {
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: string;
}

export interface AddTweetActionInterface {
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet;
}

export type TweetsActions =
    | SetTweetsActionInterface
    | SetTweetsLoadingStateActionInterface
    | FetchTweetsActionInterface
    | FetchAddTweetActionInterface
    | AddTweetActionInterface
    | SetAddFormStateActionInterface;
