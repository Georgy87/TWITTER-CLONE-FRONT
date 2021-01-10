import axios from "axios";
import { setTweetLoadingState } from "./actionsCreatores";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { LoadingState } from "./contracts/state";
import { setTweet } from "./actionsCreatores";
import { FetchTweetActionInterface, TweetActionsType } from "./actionTypes";
import { TweetsApi } from "../../../services/api/tweetsApi";

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
    try {
        const data = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweet(data));
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR));
    }
}

export function* TweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET, fetchTweetRequest);
}
