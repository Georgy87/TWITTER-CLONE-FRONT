import produce, { Draft } from "immer";

import { TweetDataState } from "../tweet/contracts/state";
import { TweetActions } from "./actionTypes";
import { TweetActionsType } from "./actionTypes";
import { LoadingState } from "./contracts/state";

const  initialTweetState: TweetDataState = {
    tweet: undefined,
    loadingState: LoadingState.NEVER,
};

export const tweetReducer = produce(
    (draft: Draft<TweetDataState>, action: TweetActions) => {
        switch (action.type) {
            case TweetActionsType.FETCH_TWEET:
                draft.tweet = undefined;
                draft.loadingState = LoadingState.LOADING;
                break;
            case TweetActionsType.SET_TWEET:
                draft.tweet = action.payload;
                draft.loadingState = LoadingState.LOADED;
                break;
            case TweetActionsType.SET_LOADING_STATE:
                draft.loadingState = action.payload;
                break;
            default:
                break;
        }
    },
    initialTweetState
);