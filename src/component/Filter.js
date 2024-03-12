// Filter.js
import React, { useState } from 'react';

const Filter = ({ onAddMovie, onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [description, setDescription] = useState('');

  const handleAddMovie = () => {
    const newMovie = {
      title,
      rating: parseInt(rating),
      posterURL,
      description
    };
    onAddMovie(newMovie);
    // Clear input fields after adding the movie
    setTitle('');
    setRating('');
    setPosterURL('');
    setDescription('');
  };

  const handleFilter = () => {
    onFilter({ title, rating, posterURL, description });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <button onClick={handleAddMovie}>Add</button>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
