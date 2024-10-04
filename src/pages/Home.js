import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://movieapp-api-lms1.onrender.com/movies/getMovies'); // Correct endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data); // Log the response to inspect its structure

        // Access the movies array from the response object
        if (Array.isArray(data.movies)) {
          setMovies(data.movies); // Set movies if data.movies is an array
        } else {
          throw new Error('Response does not contain an array of movies');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('Failed to load movies. Please try again later.'); // Update error state
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie Catalog</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if there's an error */}
      <div className="movie-list">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))
        ) : (
          <p>No movies available.</p> // Display a message if there are no movies
        )}
      </div>
    </div>
  );
}

export default Home;
