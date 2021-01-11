import { Action } from "redux";
import { LoadingStatus, TagsState } from "./contracts/state";

export enum TagsActionsType {
    SET_TAGS = 'tags/SET_TWEETS',
    FETCH_TAGS = 'tags/FETCH_TWEETS',
    SET_LOADING_STATE = 'SET_LOADING_STATE'
}

export interface SetTagsActionInterface {
    type: TagsActionsType.SET_TAGS;
    payload: TagsState['items'];
}

export interface FetchTagsActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS;
}

export interface SetTagsLoadingStatusActionInterface extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE;
    payload: LoadingStatus;
}


export const setTags = (payload: TagsState['items']): SetTagsActionInterface  => ({
    type: TagsActionsType.SET_TAGS,
    payload
});

export const fetchTags = (): FetchTagsActionInterface  => ({
    type: TagsActionsType.FETCH_TAGS,
});

export const setTagsLoadingStatus = (payload: LoadingStatus): SetTagsLoadingStatusActionInterface  => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload
});

export type TagsActions = SetTagsActionInterface | SetTagsLoadingStatusActionInterface | FetchTagsActionInterface;