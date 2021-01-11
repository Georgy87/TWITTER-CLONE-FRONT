import axios from "axios";
import { setTweetLoadingStatus } from "./actionsCreatores";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { setTweet } from "./actionsCreatores";
import { FetchTweetActionInterface, TweetActionsType } from "./actionTypes";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { LoadingStatus } from "../../types";

export function* fetchTweetRequest({ payload: tweetId }: FetchTweetActionInterface) {
    try {
        const data = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweet(data));
    } catch (error) {
        yield put(setTweetLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* TweetSaga() {
    yield takeLatest(TweetActionsType.FETCH_TWEET, fetchTweetRequest);
}
