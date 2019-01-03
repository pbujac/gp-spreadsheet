import React from 'react';
import FieldError from 'components/Form/FieldError';

const Input = ({
  id,
  name,
  type,
  value = '',
  labelName,
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
      {(labelName || name) &&
        <label htmlFor={id}>
          {labelName || name}
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
