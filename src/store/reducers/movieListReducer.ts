import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../models";


const initialState = {
  data: new Array<IMovie>(),
  isLoading: false,
  error: '',
};

export const movieListSlice = createSlice({
  name: "movieList",
  initialState: initialState,
  reducers: {
    fetchMovieList: (state, action) => {
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

export const {
  fetchMovieList,
  setMovieList,
  getmovieListError
} = movieListSlice.actions;


