import MovieForm from '../MovieForm/MovieForm.tsx';
import Movies from '../Movies/Movies.tsx';
import React, { useState } from 'react';
import { IMoviesItem } from '../../types';

const Panel = () => {
  const [movies, setMovies] = useState<IMoviesItem[]>([]);

  const addMovie = (value: string, idValue: number) => {
    const newMovie: IMoviesItem = {
      name: value,
      id: idValue,
    };
    setMovies((prevState) => [...prevState, newMovie]);
  };
  const deleteMovie = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((item) => item.id !== id));
  };

  const changeMovieName = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    setMovies((prevMovies) =>
      prevMovies.map((item) =>
        item.id === id ? { ...item, name: e.target.value } : item,
      ),
    );
  };

  return (
    <div className="border border-1 rounded-3 shadow py-3 px-3">
      <MovieForm onSubmit={addMovie} />
      <hr />
      <Movies
        movies={movies}
        deleteMovie={deleteMovie}
        changeMovieName={changeMovieName}
      />
    </div>
  );
};

export default Panel;
