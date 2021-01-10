import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import { TweetsState } from "./ducks/tweets/contracts/state";
import { TagsState } from "./ducks/tags/contracts/state";
import { TweetDataState } from "./ducks/tweet/contracts/state";

const sagaMiddleware = createSagaMiddleware();

export type RootState = {
    tweets: TweetsState,
    tags: TagsState,
    tweet: TweetDataState
}
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// const composeEnhancers =
//     (typeof window !== "undefined" &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
