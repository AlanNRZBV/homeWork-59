import React from 'react';

export interface IMoviesItem {
  name: string;
  id: number;
  deleteMovie?: (id: number) => void;
  changeMovieName?: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => void;
}

export interface IMovies {
  movies: IMoviesItem[];
  deleteMovie: (id: nubmer) => void;
  changeMovieName?: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => void;
}

export interface IMovieForm {
  onSubmit: (value, idValue) => void;
}
