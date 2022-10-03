import { combineReducers } from "@reduxjs/toolkit";
import { movieListSlice } from "./movieListReducer"
import { movieCardSlice } from "./movieCardReducer"

export const rootReducer = combineReducers({
  movieList: movieListSlice.reducer,
  movieCard: movieCardSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>