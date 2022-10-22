import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  getmovieListError,
  setMovieList,
  startMovieListFetch,
} from "../reducers/movieListSlice";
import { IMovie } from "models";
import { fetchMovieList } from "api";
import { PayloadAction } from "@reduxjs/toolkit";

function* startMovieListFetchWorker(action: { payload: string; type: PayloadAction<string> }) {
  try {
    const data: IMovie[] = yield call(
      fetchMovieList,
      action.payload
    );
    yield put(setMovieList(data));
  } catch (error: unknown) {
    yield put(getmovieListError({ error: error }));
  }
}

export function* watchMovieList() {
  yield takeLatest(startMovieListFetch.type, startMovieListFetchWorker);
}
