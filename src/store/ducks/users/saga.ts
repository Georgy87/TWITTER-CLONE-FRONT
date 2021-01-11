import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { UsersActionsType } from "./actionsCreatores";

export function* fetchUsersRequest() {
    try {
        // const items = yield call(TagsApi.fetchTags);
        // yield put(setTags(items));
    } catch (error) {
        // yield put(setTagsLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* UsersSaga() {
    yield takeLatest(UsersActionsType.FETCH_ITEMS, fetchUsersRequest);
}