import { useEffect } from "react";
import { MovieListItem } from "./MovieListItem";
import { fetchMovieList } from "../store/reducers/movieListReducer";
import { RootState } from "../store/reducers/rootReducer";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { BASE_MOVIE_URL, POPULAR_MOVIES, KEY } from "../constants/global";


export const MovieList = () => {
  const {data} = useAppSelector((state: RootState ) => state.movieList);
  const dispatch = useAppDispatch();
  const popularMoviesPath = `${BASE_MOVIE_URL}${POPULAR_MOVIES}${KEY}`;


  useEffect(() => {
    dispatch(fetchMovieList(popularMoviesPath));
  }, [dispatch, popularMoviesPath]);

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
