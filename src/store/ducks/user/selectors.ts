import { RootState } from "../../store";
import { UserState } from "./contracts/state";

export const selectUserState = (state: RootState): UserState => state.user;
