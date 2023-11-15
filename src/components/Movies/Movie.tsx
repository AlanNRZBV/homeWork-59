import React from 'react';

const Movie = () => {
  return (
    <div className="input-group mb-3 border border-1 rounded rounded-3" style={{alignItems: 'center'}}>
      <input type="text" className="form-control" value="Movie title"/>
      <button
        className="btn-close px-3"
        type="button"
        id="button-addon2"
      ></button>
    </div>
  );
};

export default Movie;