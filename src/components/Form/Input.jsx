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
  onKeyPress,
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
        onKeyPress={onKeyPress}
        autoFocus={autofocus}
      />

      {name && <FieldError errors={errors} name={name} />}
    </>
  );
};

export default Input;
