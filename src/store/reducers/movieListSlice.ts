import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../models";

type MovieListInitialState = {
  data: IMovie[];
  isLoading: boolean;
  error: string;
};

const initialState: MovieListInitialState = {
  data: [],
  isLoading: false,
  error: "",
};

export const movieListSlice = createSlice({
  name: "movieList",
  initialState: initialState,
  reducers: {
    startMovieListFetch: (state, action) => {
      state.isLoading = true;
    },
    setMovieList: (state, action) => {
      state.data = action.payload.data.results;
      state.isLoading = false;
    },
    getmovieListError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const { startMovieListFetch, setMovieList, getmovieListError } =
  movieListSlice.actions;
