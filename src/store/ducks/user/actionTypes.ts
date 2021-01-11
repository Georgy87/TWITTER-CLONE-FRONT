import { Action } from "redux";
import { LoadingState } from "../../types";

import { User } from './contracts/state'

export enum UserActionsType {
    SET_USER_DATA = 'user/SET_USER_DATA',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',
}

export interface SetUserDataActionInterface {
    type:  UserActionsType.SET_USER_DATA;
    payload: User;
}

export interface SetUserLoadingStateActionInterface {
    type:  UserActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}



