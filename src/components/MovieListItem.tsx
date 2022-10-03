import { Link } from "react-router-dom";
import { BASE_IMG_URL, IMG_SIZE, BASE_MOVIE_URL, KEY } from "../constants/global";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { IMovie } from "../models";
import { fetchMovieCard } from "../store/reducers/movieCardReducer";


export const MovieListItem = ({ movie }: { movie: IMovie }) => {
  const { id, title, poster_path } = movie;
  const movieId = id.toString();
  const posterPath = `${BASE_IMG_URL}${IMG_SIZE}${poster_path}`;
  const movieCardPath = `${BASE_MOVIE_URL}${movieId}${KEY}`;


  const dispatch = useAppDispatch();

  return (
    <Link
      to={`/movie/${movieId}`}
      onClick={() => dispatch(fetchMovieCard(movieCardPath))}
      className="group relative"
    >
      <div className="min-h-80 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        <img
          src={posterPath}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <p className="text-center text-xl font-bold">{title}</p>
    </Link>
  );
};
