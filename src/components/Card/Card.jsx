import React from 'react';

import style from './Card.scss';
import cn from 'classnames';

const Card = ({ title, description, theme = '', children, customStyle = {} }) => {
  return (
    <section className={cn(style.card, style[theme], customStyle)}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>

      {children}
    </section>
  );
};

export default Card;
