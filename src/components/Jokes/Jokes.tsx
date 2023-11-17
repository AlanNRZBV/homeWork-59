import { FC } from 'react';
import JokesItem from './JokesItem.tsx';
import { IJokes } from '../../types';

const Jokes: FC<IJokes> = ({ jokes }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {jokes.map((item) => (
        <JokesItem key={item.id} id={item.id} value={item.value} />
      ))}
    </div>
  );
};

export default Jokes;
