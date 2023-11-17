import  { FC } from 'react';
import {IJokesItem} from '../../types';

const JokesItem: FC<IJokesItem> = ({ value}) => {
  return (
    <div className="border border-1 rounded rounded-3 py-3 px-3 mb-3">
      <p className="text text-black">
        {value}
      </p>
    </div>
  );
};

export default JokesItem;