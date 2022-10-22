import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMG_URL, BASE_MOVIE_URL, IMG_SIZE, KEY } from "constants/global";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { startMovieCardFetch } from "store/reducers/movieCardSlice";
import { parsedGenres, parsedRuntime } from "components/movieCard/utils";
import LoadingScreen from "components/loadingScreen";
import ErrorScreen from "components/errorScreen";

export const MovieCard = () => {
  const { data, isLoading, error } = useAppSelector((state) => state.movieCard);
  const { id } = useParams();
  const movieCardPath = `${BASE_MOVIE_URL}${id}${KEY}`;
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(startMovieCardFetch(movieCardPath));
  }, [dispatch, movieCardPath]);

  if (isLoading) {
    return <LoadingScreen />;
  } else if (error) {
    return <ErrorScreen />;
  }
  return (
    <div className="grid min-h-screen place-items-center bg-gray-900 text-center">
      <div className="rounded-md bg-gray-800 shadow-lg">
        <div className="max-w-4xl px-4 leading-none md:flex">
          <div className="flex-none ">
            <img
              src={BASE_IMG_URL + IMG_SIZE + data.poster_path}
              alt={data.title}
              className="h-80 w-60 -translate-y-4 transform rounded-md border-4 border-gray-300 shadow-lg"
            />
          </div>
          <div className="flex-col text-gray-300">
            <div className="px-4 py-4 text-2xl font-bold">{data.title}</div>
            <div className="text-md my-2 flex justify-between px-4">
              <span className="hidden font-bold md:block">{data.tagline}</span>
            </div>
            <div className="text-md my-4 px-4 text-start">
              <span>{parsedRuntime(data.runtime)}</span>
              <span className="font-bold px-2">|</span>
              <span>{parsedGenres(data.genres)}</span>
            </div>

            <p className="my-4 hidden px-4 text-left text-sm md:block">
              {data.overview}
            </p>
            <p className="text-md my-3 flex px-4">
              <span className="font-bold">Release date: </span>
              <span className=" px-2">{data.release_date}</span>
            </p>
            <p className="text-md my-4 flex px-4">
              <span className="font-bold">Rating:</span>
              <span className=" px-2">{Math.round(data.vote_average)}/10</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

