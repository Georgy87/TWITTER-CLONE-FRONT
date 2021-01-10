import { all } from "redux-saga/effects";
import { TagsSaga } from "./ducks/tags/saga";
import { TweetSaga } from "./ducks/tweet/saga";
import { tweetsSaga } from "./ducks/tweets/saga";

export default function* rootSaga() {
    yield all([tweetsSaga(), TagsSaga(), TweetSaga()]);
    // code after all-effect
}
