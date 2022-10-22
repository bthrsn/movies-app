import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../models";

type MovieListInitialState = {
  data: IMovie[];
  isLoading: boolean;
  error: unknown;
};

const initialState: MovieListInitialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const movieListSlice = createSlice({
  name: "movieList",
  initialState: initialState,
  reducers: {
    startMovieListFetch: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    setMovieList: (state, action: PayloadAction<IMovie[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getmovieListError: (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startMovieListFetch, setMovieList, getmovieListError } =
  movieListSlice.actions;
