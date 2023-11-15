import React from 'react';

const MovieForm = () => {
  return (
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text">Add movie</span>
        <input type="text" className="form-control" placeholder="Matrix" />
        <button
          className="btn btn-success"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>
    </form>
  );
};
export default MovieForm;
