import { RootState } from "../../store";
import { AddFormState, LoadingStatus, TweetsState } from "./contracts/state";
import { createSelector } from "reselect";

export const selectTweetsState = (state: RootState): TweetsState => state.tweets;

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
    selectTweetsState (state).LoadingStatus;

export const selectAddFormState = (state: RootState): AddFormState =>
selectTweetsState (state).addFormState;

export const selectIsTweetsLoading = (state: RootState): boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsTweetsLoaded = (state: RootState): boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectTweetsItems = (state: RootState) => selectTweetsState(state).items;
