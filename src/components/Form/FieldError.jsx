import React from 'react';

import style from './Error.scss';

const FieldError = ({ errors, name }) => {
  const isErrorAvailable = errors && errors[name];

  if (isErrorAvailable) {
    return (<p className={style.error}>{errors[name]}</p>);
  }

  return null;
};

export default FieldError;
