import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { Tweet } from "../tweets/contracts/state";
import { TweetDataState } from "./contracts/state";

export const selectTweet = (state: RootState): TweetDataState => state.tweet;

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
    selectTweet(state).LoadingStatus;

export const selectIsTweetLoading = (state: RootState): boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADING;

export const selectIsTweetLoaded = (state: RootState): boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADED;

export const selectTweetData = (state: RootState): Tweet | undefined => selectTweet(state).tweet;

