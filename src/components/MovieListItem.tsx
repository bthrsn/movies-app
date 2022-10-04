import { Link } from "react-router-dom";
import { BASE_IMG_URL, IMG_SIZE } from "../constants/global";
import { IMovie } from "../models";


export const MovieListItem = ({ movie }: { movie: IMovie }) => {
  const { id, title, poster_path } = movie;
  const movieId = id.toString();
  const posterPath = `${BASE_IMG_URL}${IMG_SIZE}${poster_path}`;

  return (
    <Link
      to={`/movie/${movieId}`}
      className="group relative"
    >
      <div className="min-h-80 w-full overflow-hidden rounded-md group-hover:opacity-75">
        <img
          src={posterPath}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <p className="text-center text-xl font-bold text-gray-300">{title}</p>
    </Link>
  );
};
