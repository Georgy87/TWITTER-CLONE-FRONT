import produce, { Draft } from "immer";
import { TweetsActionsType } from "./actionTypes";
import { TweetsActions } from "./actionTypes";
import { AddFormState, TweetsState } from "./contracts/state";
import { LoadingState } from "./contracts/state";

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
    addFormState: AddFormState.NEVER,
};

export const tweetsReducer = produce(
    (draft: Draft<TweetsState>, action: TweetsActions) => {
        switch (action.type) {
            case TweetsActionsType.FETCH_TWEETS:
                draft.items = [];
                draft.loadingState = LoadingState.LOADING;
                break;
            case TweetsActionsType.SET_TWEETS:
                draft.items = action.payload;
                draft.loadingState = LoadingState.LOADED;
                break;
            case TweetsActionsType.SET_LOADING_STATE:
                draft.loadingState = action.payload;
                break;
            case TweetsActionsType.FETCH_ADD_TWEET:
                draft.addFormState = AddFormState.LOADING;
                break;
            case TweetsActionsType.ADD_TWEET:
                draft.items.unshift(action.payload);
                draft.addFormState = AddFormState.NEVER;
                break;
            case TweetsActionsType.SET_ADD_FORM_STATE:
                draft.addFormState = action.payload;
                break;
            default:
                break;
        }
    },
    initialTweetsState
);
