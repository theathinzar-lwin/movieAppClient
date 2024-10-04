import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie._id}`}> {/* Assuming movie._id is the unique identifier */}
        <h2>{movie.title}</h2>
      </Link>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieCard;
