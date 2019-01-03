const DATE_TYPE = 'date';
const STRING_TYPE = 'string';
const NUMBER_TYPE = 'number';
const CUSTOM_TYPE = 'custom';

const validateDateCell = (value) => {};
const validateStringCell = (value) => typeof value === 'string' || value instanceof String;
const validateNumberCell = (value) => (/^(-?\d+\.\d+)$|^(-?\d+)$/).test(value);
const validateCustomCell = (value) => {};

const getValidationRule = (value, type) => {
  const rules = {
    [DATE_TYPE]: validateDateCell,
    [STRING_TYPE]: validateStringCell,
    [NUMBER_TYPE]: validateNumberCell,
    [CUSTOM_TYPE]: validateCustomCell,
  };

  return rules[type] && rules[type](value);
};

export const applyColumnValidationRules = (value, type) => {
  if (value && type) {
    return getValidationRule(value, type.toLowerCase());
  }

  return true;
};