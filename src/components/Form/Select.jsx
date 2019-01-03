import React from 'react';

import FieldError from 'components/Form/FieldError/FieldError';

const Select = ({
  id,
  name,
  labelName,
  options,
  placeholder,
  optionValueName = '',
  optionFieldName = name,
  onChange,
  errors,
}) => {
  return (
    <>
      <label htmlFor={id}>{labelName || name}</label>
      <select
        id={id}
        name={name}
        onChange={onChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options && options.map((option, index) =>
          <option key={index}
            value={option[optionValueName]}>{option[optionFieldName]}</option>,
        )}
      </select>

      <FieldError errors={errors} name={name}/>
    </>
  );
};

export default Select;
