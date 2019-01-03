import { CUSTOM_LIST_NAME } from 'components/Form/form.utils';

const DATE_TYPE = 'date';
const STRING_TYPE = 'string';
const NUMBER_TYPE = 'number';
export const CUSTOM_TYPE = 'custom';

const validateDateCell = (value) => {
  /** TODO: To extend validation rule */
  const parsedDate = Date.parse(value);

  return isNaN(value) && !isNaN(parsedDate);
};
const validateStringCell = (value) => typeof value === 'string' || value instanceof String;
const validateNumberCell = (value) => (/^(-?\d+\.\d+)$|^(-?\d+)$/).test(value);
const validateCustomCell = (value, cellData) => cellData && cellData[CUSTOM_LIST_NAME].includes(value);

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
