export const validateTitle = (title, errorMessage) => (
  title.trim().length === 0
    ? errorMessage || 'Title must be required'
    : false
);
