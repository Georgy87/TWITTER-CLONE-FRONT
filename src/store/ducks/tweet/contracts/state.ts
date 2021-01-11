import { LoadingStatus, Tweet } from "../../tweets/contracts/state"

export type TweetDataState = {
    tweet?: Tweet;
    LoadingStatus: LoadingStatus;
}