import React, { FC, useState } from 'react';
import { IMovieForm } from '../../types';

const MovieForm: FC<IMovieForm> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    const rndId = Math.floor(Math.random() * 10000);

    e.preventDefault();
    onSubmit(inputValue, rndId);
    setInputValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text">Add movie</span>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Example: Matrix"
          value={inputValue}
          required
        />
        <button className="btn btn-success" type="submit" id="button-addon2">
          Submit
        </button>
      </div>
    </form>
  );
};
export default MovieForm;
