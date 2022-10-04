import * as React from 'react';
import { Link } from "react-router-dom";
import Header from "components/header";
import MovieCard from "components/movieCard";

export const MovieDetailsPage = () => {
  return (
    <div>
      <Header>
        <Link to="/">Back to popular</Link>
      </Header>
      <MovieCard />
    </div>
  );
};
