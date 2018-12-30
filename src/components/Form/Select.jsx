import React from 'react';
import FieldError from 'components/Form/FieldError';

const Select = ({ id, name, options, placeholder,  onChange, errors }) => {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <select
        id={id}
        name={name}
        onChange={onChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options && options.map((option, index) =>
          <option key={index} value={option.value}>{option.name}</option>
        )}
      </select>

      <FieldError errors={errors} name={name} />
    </>
  );
};

export default Select;
