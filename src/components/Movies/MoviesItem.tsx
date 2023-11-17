import React, { FC } from 'react';
import { IMoviesItem } from '../../types';

const MoviesItem: FC<IMoviesItem> = React.memo(
  ({ name, id, deleteMovie, changeMovieName }) => {
    const handleClick = () => {
      if (deleteMovie) {
        deleteMovie(id);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (changeMovieName) {
        changeMovieName(e, id);
      }
    };
    return (
      <div
        className="input-group mb-3 border border-1 rounded rounded-3"
        style={{ alignItems: 'center' }}
      >
        <span className="input-group-text" id="basic-addon1">
          {id}
        </span>
        <input
          onChange={handleChange}
          name={name}
          type="text"
          className="form-control"
          value={name}
        />
        <button
          onClick={handleClick}
          className="btn-close px-3"
          type="button"
          id="button-addon2"
        ></button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return nextProps.name === prevProps.name;
  },
);

export default MoviesItem;
