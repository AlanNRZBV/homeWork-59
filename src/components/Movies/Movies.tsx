import { FC } from 'react';
import MoviesItem from './MoviesItem.tsx';
import { IMovies } from '../../types';

const Movies: FC<IMovies> = ({ movies, deleteMovie, changeMovieName }) => {
  return (
    <div className="border border-1 rounded rounded-3 px-3 py-3">
      <span className="test text-primary d-block">Movies to watch</span>
      <hr />
      {movies.map((item) => (
        <MoviesItem
          changeMovieName={changeMovieName}
          deleteMovie={deleteMovie}
          name={item.name}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Movies;
