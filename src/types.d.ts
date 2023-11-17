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

export interface IPanel {
  switchContent: boolean
}

export interface IJokesItem {
  id?: string,
  value: string,
}

export interface IButton {
  innerText: string,
  onClick: ()=> void
  addClass?: string
}

export interface IJokes {
  jokes: IJokesItem[]
}