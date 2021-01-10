import axios from "axios";
import {addTweet, setAddFormState, setTweetsLoadingState} from './actionsCreatores';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/api/tweetsApi';
import { AddFormState, LoadingState } from "./contracts/state";
import {setTweets} from "./actionsCreatores";
import {  FetchAddTweetActionInterface, TweetsActionsType } from "./actionTypes";

export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items));
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* fetchAddTweetsRequest({payload: text}: FetchAddTweetActionInterface) {
    try {
        const item = yield call(TweetsApi.addTweet, text);
        yield put(addTweet(item));
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetsRequest);
}





