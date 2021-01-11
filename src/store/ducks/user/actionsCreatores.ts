import { FetchSignInActionInterface, SetUserLoadingStatusActionInterface, UserActionsType } from "./actionTypes";
import { UserState } from "./contracts/state";
import { SetUserDataActionInterface } from "./actionTypes";
import { LoginFormProps } from "../../../pages/SignIn/components/LoginModal";

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload,
});

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload,
});

export const setUserLoadingStatus = (payload: UserState['status']): SetUserLoadingStatusActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload,
});

export type UserActions = SetUserDataActionInterface | SetUserLoadingStatusActionInterface | FetchSignInActionInterface;





