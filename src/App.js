import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Kongfu Panda', description: 'Fighting Panda', posterURL: 'kongfu.jpg', rating: 8 },
    { id: 2, title: 'Ghost Busters', description: 'Busting evil ghost', posterURL: 'ghostbusters.jpg', rating: 7 },
    { id: 3, title: 'Batman', description: 'Batman in the rain', posterURL: 'batman.jpg', rating: 7 },
    { id: 1, title: 'La Casa De Papel ( Money Heist)', description: 'Gang robbery', posterURL: 'money heist.jpg', rating: 4 },
    { id: 2, title: 'Spider Woman', description: 'Spider woman saves the day', posterURL: 'spiderwoman.jpg', rating: 8},
    { id: 3, title: 'Fortnite', description: 'Blaze Fortnite', posterURL: 'blaze.jpg', rating: 5 },
    { id: 1, title: 'Star Wars', description: 'Star Wars the bad batch', posterURL: 'starwars.jpg', rating: 3 },
    { id: 2, title: 'Kingdom of The Plantes of Ape', description: 'Ape-dom ', posterURL: 'kingdom of apes.jpg', rating: 8 },
    { id: 3, title: 'Barbie', description: 'Life of a barbie', posterURL: 'barbie.jpg', rating: 10 },
    { id: 3, title: 'Avatar', description: 'The last airbender', posterURL: 'avatar.jpg', rating: 5 },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating, posterURL, description }) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (rating) {
      filtered = filtered.filter(movie => movie.rating >= rating);
    }
    if (posterURL) {
      filtered = filtered.filter(movie => movie.posterURL >= posterURL);
    }
    if (description) {
      filtered = filtered.filter(movie => movie.description >= description);
    }
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>Movie Collections</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;