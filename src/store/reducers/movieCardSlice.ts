import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovieCard } from "../../models";

export type MovieCardInitialState = {
  data: IMovieCard,
  isLoading: boolean,
  error: unknown,
}

const initialState: MovieCardInitialState  = {
  data: {} as IMovieCard,
  isLoading: false,
  error: null,
};

export const movieCardSlice = createSlice({
  name: "movieCard",
  initialState,
  reducers: {
    startMovieCardFetch: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    setMovieCard: (state, action: PayloadAction<IMovieCard>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getMovieCardError: (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startMovieCardFetch, setMovieCard, getMovieCardError } =
movieCardSlice.actions;

