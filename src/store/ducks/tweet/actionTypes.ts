import { Action } from "redux";
import { LoadingStatus, Tweet } from "../tweets/contracts/state";
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

export interface SetTweetLoadingStatusActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE;
    payload: LoadingStatus;
}

export type TweetActions =  SetTweetActionInterface  | SetTweetLoadingStatusActionInterface | FetchTweetActionInterface;