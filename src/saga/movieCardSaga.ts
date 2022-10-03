import axios from "axios";
import { call, put, takeLatest } from "@redux-saga/core/effects";

import {
  fetchMovieCard,
  setMovieCard,
  getMovieCardError,
} from "../store/reducers/movieCardReducer";

function* fetchMovieCardWorker(action: any) {
  try {
    const { data } = yield call(axios.get, action.payload);
    yield put(setMovieCard({ data }));
  } catch (error: any) {
    yield put(getMovieCardError({ error: error.message }));
  }
}
export function* watchMovieCard() {
  yield takeLatest(fetchMovieCard.type, fetchMovieCardWorker);
}
