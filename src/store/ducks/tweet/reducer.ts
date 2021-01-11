import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";

import { TweetDataState } from "../tweet/contracts/state";
import { TweetActions } from "./actionTypes";
import { TweetActionsType } from "./actionTypes";


const  initialTweetState: TweetDataState = {
    tweet: undefined,
    LoadingStatus: LoadingStatus.NEVER,
};

export const tweetReducer = produce(
    (draft: Draft<TweetDataState>, action: TweetActions) => {
        switch (action.type) {
            case TweetActionsType.FETCH_TWEET:
                draft.tweet = undefined;
                draft.LoadingStatus = LoadingStatus.LOADING;
                break;
            case TweetActionsType.SET_TWEET:
                draft.tweet = action.payload;
                draft.LoadingStatus = LoadingStatus.LOADED;
                break;
            case TweetActionsType.SET_LOADING_STATE:
                draft.LoadingStatus = action.payload;
                break;
            default:
                break;
        }
    },
    initialTweetState
);