import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams(); // Extract the movie ID from the URL parameters
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://movieapp-api-lms1.onrender.com/movies/${id}`);
        if (!response.ok) throw new Error('Movie not found');
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [id]); // Fetch movie details when the component mounts or when the ID changes

  if (!movie) return <div>Loading...</div>; // Show loading message while fetching

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Description:</strong> {movie.description}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      {/* Additional details can be added here */}
    </div>
  );
};

export default MovieDetails;
