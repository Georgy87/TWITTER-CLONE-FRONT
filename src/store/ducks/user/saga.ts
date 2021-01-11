import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { AuthApi } from "../../../services/api/authApi";
import { LoadingStatus } from "../../types";
import { setUserLoadingStatus, setUserData } from "./actionsCreatores";
import { FetchSignInActionInterface, UserActionsType } from "./actionTypes";

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
    try {
        const data = yield call(AuthApi.signIn, payload);
        yield put(setUserData(data));
        window.localStorage.setItem('token', data.data.token);
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* UserSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
}
