import axios from "axios";
import { call, put, takeLatest } from "@redux-saga/core/effects";

import {
  getMovieCardError,
  setMovieCard,
  startMovieCardFetch,
} from "../reducers/movieCardSlice";

function* startMovieCardFetchWorker(action: any) {
  try {
    const { data } = yield call(axios.get, action.payload);
    yield put(setMovieCard({ data }));
  } catch (error: any) {
    yield put(getMovieCardError({ error: error.message }));
  }
}
export function* watchMovieCard() {
  yield takeLatest(startMovieCardFetch.type, startMovieCardFetchWorker);
}
