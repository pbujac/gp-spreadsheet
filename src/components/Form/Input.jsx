import React from 'react';
import FieldError from 'components/Form/FieldError';

const Input = ({
  id,
  name,
  type,
  value = '',
  placeholder,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  errors,
  autofocus,
}) => {
  return (
    <>
      {name &&
        <label htmlFor={id}>
          {name}
        </label>
      }

      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        autoFocus={autofocus}
      />

      {name && <FieldError errors={errors} name={name} />}
    </>
  );
};

export default Input;
