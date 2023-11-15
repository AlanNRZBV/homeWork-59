import MovieForm from '../MovieForm/MovieForm.tsx';
import Movies from '../Movies/Movies.tsx';

const Panel = () => {
  return (
    <div className="border border-1 rounded-3 shadow py-3 px-3">

<MovieForm/>
      <hr/>
      <Movies/>
    </div>
  );
};

export default Panel;