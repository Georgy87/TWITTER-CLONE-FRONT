import axios from "axios";
import {setTagsLoadingState, TagsActionsType} from './actionsCreatores';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { LoadingState } from "./contracts/state";
import {setTags} from "./actionsCreatores";
import { TagsApi } from "../../../services/api/tagsApi";

export function* fetchTagsRequest() {
    try {
        const items = yield call(TagsApi.fetchTags);
        yield put(setTags(items));
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR));
    }
}

export function* TagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}