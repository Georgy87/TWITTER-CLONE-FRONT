import produce, { Draft } from "immer";
import { UserActions } from "./actionsCreatores";

import { LoadingState } from "../../types";
import { UserState } from './contracts/state';
import { UserActionsType } from "./actionTypes";

const initialTweetsState: UserState = {
    data: undefined,
    status: LoadingState.NEVER,
};

export const tweetsReducer = produce(
    (draft: Draft<UserState>, action: UserActions) => {
        switch (action.type) {
            case UserActionsType.SET_USER_DATA:
                draft.data = undefined;
                draft.status = LoadingState.LOADING;
                break;
            // case TweetsActionsType.SET_TWEETS:
            //     draft.items = action.payload;
            //     draft.loadingState = LoadingState.LOADED;
            //     break;
            // case TweetsActionsType.SET_LOADING_STATE:
            //     draft.loadingState = action.payload;
            //     break;
            // case TweetsActionsType.FETCH_ADD_TWEET:
            //     draft.addFormState = AddFormState.LOADING;
            //     break;
            // case TweetsActionsType.ADD_TWEET:
            //     draft.items.unshift(action.payload);
            //     draft.addFormState = AddFormState.NEVER;
            //     break;
            // case TweetsActionsType.SET_ADD_FORM_STATE:
            //     draft.addFormState = action.payload;
            //     break;
            // default:
            //     break;
        }
    },
    initialTweetsState
);
