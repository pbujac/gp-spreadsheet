import { CUSTOM_LIST_NAME } from 'components/Form/form.utils';

const DATE_TYPE = 'date';
const STRING_TYPE = 'string';
const NUMBER_TYPE = 'number';
export const CUSTOM_TYPE = 'custom';

const validateDateCell = (value) => {
  /** TODO: To extend validation rule */
  const dateRegex = /(0[1-9]|[12][0-9]|3[01])[-\s\/\.](0[1-9]|1[012])[-\s\/\.](19|20)\d\d/;

  return dateRegex.test(value);
};

const validateStringCell = (value) => typeof value === 'string' || value instanceof String;
const validateNumberCell = (value) => (/^(-?\d+\.\d+)$|^(-?\d+)$/).test(value);
const validateCustomCell = (value, cell) => cell && cell[CUSTOM_LIST_NAME].includes(value);

const getValidationRule = (value, type, currentCellData) => {
  const rules = {
    [DATE_TYPE]: validateDateCell,
    [STRING_TYPE]: validateStringCell,
    [NUMBER_TYPE]: validateNumberCell,
    [CUSTOM_TYPE]: validateCustomCell,
  };

  return rules[type] && rules[type](value, currentCellData);
};

export const applyColumnValidationRules = (value, type, currentCellData) => {
  if (value && type) {
    return getValidationRule(value, type.toLowerCase(), currentCellData);
  }

  return true;
};
