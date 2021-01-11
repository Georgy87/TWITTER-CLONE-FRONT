import { LoadingStatus } from "../../../types"
import { User } from "../../user/contracts/state"

export type UsersState = {
    items: User[];
    LoadingStatus: LoadingStatus;
}
