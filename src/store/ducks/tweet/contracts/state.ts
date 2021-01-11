import { LoadingState, Tweet } from "../../tweets/contracts/state"

export type TweetDataState = {
    tweet?: Tweet;
    loadingState: LoadingState;
}