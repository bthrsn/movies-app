import axios from "axios";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  fetchMovieList,
  setMovieList,
  getmovieListError,
} from "../store/reducers/movieListReducer";

function* fetchMovieListWorker(action: any) {

  try {
    const { data } = yield call(axios.get, action.payload);
    yield put(setMovieList({ data }));
  } catch (error: any) {
    yield put(getmovieListError({ error: error.message }));
  }
}

export function* watchMovieList() {
  yield takeLatest(fetchMovieList.type, fetchMovieListWorker);
}
