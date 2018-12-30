import React from 'react';
import FieldError from 'components/Form/FieldError';

const Input = ({ id, name, type, placeholder, onChange, onBlur, onFocus, errors}) => {
  return (
    <>
    <label htmlFor={id}>
      {name}
    </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />

      <FieldError errors={errors} name={name} />
    </>
  );
};

export default Input;
