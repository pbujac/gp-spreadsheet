import React from 'react';
import style from './Loading.scss';

const Loading = props => {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <div className={style.loading}>Loading...</div>;
  }
};

export default Loading;
