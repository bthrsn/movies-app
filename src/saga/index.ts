import {all} from "redux-saga/effects"
import {watchMovieCard} from "./movieCardSaga";
import {watchMovieList} from "./movieListSaga";

export function* rootWatcher() {
    yield all([watchMovieCard(), watchMovieList()])
}