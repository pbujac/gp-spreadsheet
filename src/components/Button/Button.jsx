import React from 'react';

import style from './Button.scss';
import cn from 'classnames';

const Button = ({ children, onClick, type = 'button', disabled = false, theme = '', customStyle }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(style[theme], customStyle)}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
