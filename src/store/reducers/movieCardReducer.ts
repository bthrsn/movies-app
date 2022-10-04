import { createSlice } from "@reduxjs/toolkit";
import { IMovieCard } from "../../models";



const initialState = {
  data: {} as IMovieCard,
  isLoading: false,
  error: null,
};

export const movieCardSlice = createSlice({
  name: "movieCard",
  initialState: initialState,
  reducers: {
    fetchMovieCard: (state, action) => {
      state.isLoading = true;
    },
    setMovieCard: (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
    },
    getMovieCardError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const { fetchMovieCard, setMovieCard, getMovieCardError } =
movieCardSlice.actions;

