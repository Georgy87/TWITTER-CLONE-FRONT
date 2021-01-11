import { SetUserLoadingStateActionInterface, UserActionsType } from "./actionTypes";
import { UserState } from "./contracts/state";
import {  SetUserDataActionInterface } from "./actionTypes";

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload,
});

export const setLoadingStatus = (payload: UserState['status']): SetUserLoadingStateActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload,
});

export type UserActions = SetUserDataActionInterface | SetUserLoadingStateActionInterface;





