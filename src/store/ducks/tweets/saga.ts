import axios from "axios";
import { addTweet, setAddFormState, setTweetsLoadingStatus, removeTweet } from './actionsCreatores';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { AddFormState, LoadingStatus } from "./contracts/state";
import {setTweets} from "./actionsCreatores";
import {  FetchAddTweetActionInterface, FetchRemoveTweetActionInterface, TweetsActionsType } from "./actionTypes";

export function* fetchTweetsRequest() {
    try {
      const pathname = window.location.pathname;
      const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined;
      const items = yield call(TweetsApi.fetchTweets, userId);
      yield put(setTweets(items));
    } catch (error) {
      yield put(setTweetsLoadingStatus(LoadingStatus.ERROR));
    }
  }


export function* fetchAddTweetsRequest({payload}: FetchAddTweetActionInterface) {
    try {
        const item = yield call(TweetsApi.addTweet, payload);
        yield put(addTweet(item));
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* fetchRemoveTweetsRequest({payload}: FetchRemoveTweetActionInterface) {
    try {
        // yield put(removeTweet(payload));
        yield call(TweetsApi.removeTweet, payload);
    } catch (error) {
        alert('Ошибка при удалении твита!')
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_REMOVE_TWEET, fetchRemoveTweetsRequest);
}





