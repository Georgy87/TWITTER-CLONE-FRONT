import { Action } from "redux";
import { LoadingState, Tweet } from "../tweets/contracts/state";
import { TweetDataState } from "./contracts/state";

export enum TweetActionsType {
    SET_TWEET = 'tweet/SET_TWEET',
    FETCH_TWEET = 'tweet/FETCH_TWEET',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

export interface SetTweetActionInterface {
    type: TweetActionsType.SET_TWEET;
    payload: TweetDataState['tweet'];
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEET;
    payload: string;
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export type TweetActions =  SetTweetActionInterface  | SetTweetLoadingStateActionInterface | FetchTweetActionInterface;