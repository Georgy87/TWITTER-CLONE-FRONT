import { RootState } from "../../store";
import { LoadingStatus, TagsState } from "./contracts/state";
import { createSelector } from 'reselect'

export const selectTags = (state: RootState): TagsState => state.tags;

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  selectTags(state).LoadingStatus;

export const selectIsTagsLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsTagsLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);