import { createSlice } from "@reduxjs/toolkit";
import { IMovieCard } from "../../models";

type MovieCardInitialState = {
  data: IMovieCard,
  isLoading: boolean,
  error: string
}

const initialState: MovieCardInitialState  = {
  data: {} as IMovieCard,
  isLoading: false,
  error: "",
};

export const movieCardSlice = createSlice({
  name: "movieCard",
  initialState: initialState,
  reducers: {
    startMovieCardFetch: (state, action) => {
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

export const { startMovieCardFetch, setMovieCard, getMovieCardError } =
movieCardSlice.actions;

