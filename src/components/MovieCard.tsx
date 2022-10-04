import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BASE_IMG_URL,
  BASE_MOVIE_URL,
  IMG_SIZE,
  KEY,
} from "../constants/global";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchMovieCard } from "../store/reducers/movieCardReducer";
import { RootState } from "../store/reducers/rootReducer";
import { parsedRuntime, parsedGenres } from "../utils";

export const MovieCard = () => {
  const { data } = useAppSelector((state: RootState) => state.movieCard);
  const posterPath = `${BASE_IMG_URL}${IMG_SIZE}${data.poster_path}`;
  const { id } = useParams();
  const movieCardPath = `${BASE_MOVIE_URL}${id}${KEY}`;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieCard(movieCardPath));
  }, [dispatch, movieCardPath]);

  return (
    <div className="min-h-screen grid place-items-center bg-gray-900 text-center">
      <div className="rounded-md bg-gray-800 shadow-lg">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-none ">
            <img
              src={posterPath}
              alt={data.title}
              className="h-80 w-60 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
            />
          </div>
          <div className="flex-col text-gray-300">
            <div className="px-4 py-4 text-2xl font-bold">{data.title}</div>
            <div className="text-md flex justify-between px-4 my-2">
              <span className="hidden md:block font-bold">{data.tagline}</span>
            </div>
            <div className="text-start text-md px-4 my-4">
              <span>{parsedRuntime(data.runtime)}</span>
              <span className=" px-2">|</span>
              {/* <span>{parsedGenres(data.genres)}</span> */}
            </div>

            <p className="hidden md:block px-4 my-4 text-sm text-left">
              {data.overview}
            </p>
            <p className="flex text-md px-4 my-3">
              <span className="font-bold">Release date: </span>
              <span className=" px-2">{data.release_date}</span>
            </p>
            <p className="flex text-md px-4 my-4">
              <span className="font-bold">Rating:</span>
              <span className=" px-2">{Math.round(data.vote_average)}/10</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

