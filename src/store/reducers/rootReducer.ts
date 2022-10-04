import { combineReducers } from "@reduxjs/toolkit";
import { movieListSlice } from "./movieListSlice"
import { movieCardSlice } from "./movieCardSlice"

export const rootReducer = combineReducers({
  movieList: movieListSlice.reducer,
  movieCard: movieCardSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>