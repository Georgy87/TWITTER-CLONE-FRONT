import { all } from "redux-saga/effects";
import { TagsSaga } from "./ducks/tags/saga";
import { TweetSaga } from "./ducks/tweet/saga";
import { tweetsSaga } from "./ducks/tweets/saga";
import { UserSaga } from "./ducks/user/saga";
import { UsersSaga } from "./ducks/users/saga";

export default function* rootSaga() {
    yield all([tweetsSaga(), TagsSaga(), TweetSaga(), UserSaga(), UsersSaga()]);
    // code after all-effect
}
