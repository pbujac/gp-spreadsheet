import { DELAY } from './delay';
import spreadsheet from './spreadsheet.mock';

export const getColumnTypes = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.assign([], spreadsheet.columnTypes));
    }, DELAY);
  })
);

export const saveNewSpreadsheet = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      spreadsheet.list.push(data);
      resolve(Object.assign({}, data));
    }, DELAY);
  });
};

