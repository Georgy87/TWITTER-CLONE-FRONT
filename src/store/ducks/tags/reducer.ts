import produce, { Draft } from "immer";
import { TagsActions, TagsActionsType } from "./actionsCreatores";
import { TagsState } from "./contracts/state";
import { LoadingStatus } from "./contracts/state";

const  initialTagsState: TagsState = {
    items: [],
    LoadingStatus: LoadingStatus.NEVER,
};

export const tagsReducer = produce(
    (draft: Draft<TagsState>, action: TagsActions) => {
        switch (action.type) {
            case TagsActionsType.FETCH_TAGS:
                draft.items = [];
                draft.LoadingStatus = LoadingStatus.LOADING;

                break;
            case  TagsActionsType.SET_TAGS:
                draft.items = action.payload;
                draft.LoadingStatus = LoadingStatus.LOADED;
                break;
            case TagsActionsType.SET_LOADING_STATE:
                draft.LoadingStatus = action.payload;
                break;
            default:
                break;
        }
    },
    initialTagsState
);