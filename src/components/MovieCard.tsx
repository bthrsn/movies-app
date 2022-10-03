import { Link } from "react-router-dom";
import { BASE_IMG_URL, IMG_SIZE } from "../constants/global";
import { useAppSelector } from "../hooks/useAppSelector";
import { RootState } from "../store/reducers/rootReducer";

export const MovieCard = () => {
  const { data } = useAppSelector((state: RootState) => state.movieCard);
  const posterPath = `${BASE_IMG_URL}${IMG_SIZE}${data.poster_path}`;

  return (
    <>
      <Link to="/" className="">
        Back to Home
      </Link>
      <div className="min-h-screen grid place-items-center font-mono bg-gray-900">
        <img
          src={posterPath}
          alt={data.title}
          className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
        />
        <div className="flex-col text-gray-300">
          <div className="pt-4 text-2xl font-bold">{data.title}</div>
          <div className="text-md flex justify-between px-4 my-2">
            <span className="font-bold">{data.tagline}</span>
          </div>
          <p className="hidden md:block px-4 my-4 text-sm text-left">
            {data.overview}
          </p>
        </div>
      </div>
    </>
  );
};

