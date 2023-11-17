import { IButton } from '../../types';
import { FC } from 'react';

const Button: FC<IButton> = ({ innerText, onClick, addClass }) => {
  return (
    <button
      onClick={onClick}
      className={addClass ? `btn ${addClass}` : 'btn btn-primary'}
    >
      {innerText}
    </button>
  );
};

export default Button;
