import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: '', director: '', year: '', genre: '', description: '' });

  useEffect(() => {
    fetch('https://movieapp-api-lms1.onrender.com/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const addMovie = () => {
    fetch('https://movieapp-api-lms1.onrender.com/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Ensure the user is authenticated
      },
      body: JSON.stringify(newMovie),
    })
      .then(response => response.json())
      .then(data => {
        alert('Movie added successfully!');
        setMovies([...movies, data]);
        setNewMovie({ title: '', director: '', year: '', genre: '', description: '' });
      });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Add New Movie</h2>
      <input
        type="text"
        value={newMovie.title}
        onChange={e => setNewMovie({ ...newMovie, title: e.target.value })}
        placeholder="Title"
      />
      <input
        type="text"
        value={newMovie.director}
        onChange={e => setNewMovie({ ...newMovie, director: e.target.value })}
        placeholder="Director"
      />
      <input
        type="number"
        value={newMovie.year}
        onChange={e => setNewMovie({ ...newMovie, year: e.target.value })}
        placeholder="Year"
      />
      <input
        type="text"
        value={newMovie.genre}
        onChange={e => setNewMovie({ ...newMovie, genre: e.target.value })}
        placeholder="Genre"
      />
      <textarea
        value={newMovie.description}
        onChange={e => setNewMovie({ ...newMovie, description: e.target.value })}
        placeholder="Description"
      />
      <button onClick={addMovie}>Add Movie</button>

      <h2>Movie List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
              <td>{movie.genre}</td>
              <td>{movie.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
