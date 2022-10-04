import * as React from "react";
import Header from "components/header";
import MovieList from "components/movieList";

export const HomePage = () => {
  return (
    <div className="max-h-full max-w-full bg-gray-800 ">
      <Header>
        <h1>TMDB Popular</h1>
      </Header>
      <MovieList />
    </div>
  );
};
