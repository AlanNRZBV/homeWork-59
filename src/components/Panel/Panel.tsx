import MovieForm from '../MovieForm/MovieForm.tsx';
import Movies from '../Movies/Movies.tsx';
import React, { FC, useEffect, useState } from 'react';
import { IJokesItem, IMoviesItem, IPanel } from '../../types';
import Jokes from '../Jokes/Jokes.tsx';
import Button from '../Button/Button.tsx';

const jokesUrl = 'https://api.chucknorris.io/jokes/random'

const Panel: FC<IPanel> = ({switchContent}) => {
  const [movies, setMovies] = useState<IMoviesItem[]>([]);
 const [jokes, setJokes]=useState<IJokesItem[]>([])
  const fetchData = async ()=>{
    const response = await fetch(jokesUrl);
    if (response.ok){
      const joke: IJokesItem = await response.json()
      setJokes((prevJokes)=>[...prevJokes, joke])
    }
  }

  useEffect(() => {
    fetchData().catch(e=>console.error(e))
  }, []);

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
      {switchContent ?
        <>
          <MovieForm onSubmit={addMovie} />
          <hr />
          <Movies
            movies={movies}
            deleteMovie={deleteMovie}
            changeMovieName={changeMovieName}
          />
        </> :
        <>
          <Button
            onClick={fetchData}
            innerText="Load joke"
            addClass="btn-success"
          />
          <hr/>
          <Jokes jokes={jokes}/>
        </>}

    </div>
  );
};

export default Panel;
