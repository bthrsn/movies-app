import { call, put, takeLatest } from "@redux-saga/core/effects";

import {
  getMovieCardError,
  setMovieCard,
  startMovieCardFetch,
} from "../reducers/movieCardSlice";
import { IMovieCard } from "models";
import { fetchMovieCard } from "api";
import { PayloadAction } from "@reduxjs/toolkit";

function* startMovieCardFetchWorker(action: { payload: string; type: PayloadAction<string> }) {
  try {
    const data: IMovieCard = yield call(
      fetchMovieCard,
      action.payload
    );
    yield put(setMovieCard(data));
  } catch (error: unknown) {
    yield put(getMovieCardError({ error: error }));
  }
}
export function* watchMovieCard() {
  yield takeLatest(startMovieCardFetch.type, startMovieCardFetchWorker);
}
