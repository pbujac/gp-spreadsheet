const isEmpty = (value) => typeof value !== 'undefined' && value.toString().trim().length === 0;

export const validateTitle = (title, errorMessage) => (
  isEmpty(title)
    ? errorMessage || 'Title must be required'
    : false
);

export const validateCustomList = (customList, errorMessage) => (
  isEmpty(customList)
    ? errorMessage || 'Custom list must be required'
    : false
);
