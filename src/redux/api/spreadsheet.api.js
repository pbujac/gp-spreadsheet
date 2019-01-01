import { DELAY } from './delay';
import spreadsheet from './spreadsheet.mock';
import {uniqueId} from 'utils/utils';


export const getColumnTypes = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.assign([], spreadsheet.columnTypes));
    }, DELAY);
  })
);

export const saveSpreadsheet = ({ title, type }) => {
  const setSpreadsheetData = () => {
    const newSpreadsheet = {};
    newSpreadsheet.id = uniqueId();
    newSpreadsheet.name = 'Untitled' + uniqueId();
    newSpreadsheet.columns = [{
      index: 0,
      title,
      type,
    }];

    const row = {
      index: 0,
      cells: [{
        index: 0,
        value: 'tralal',
      }],
    };
    newSpreadsheet.rows = [row, row, row, row, row, row, row, row, row, row];

    return newSpreadsheet;
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      const newSpreadsheet = setSpreadsheetData();

      const storageSpreadsheets = JSON.parse(localStorage.getItem('spreadsheets')) || [];
      storageSpreadsheets.push(newSpreadsheet);
      localStorage.setItem('spreadsheets', JSON.stringify(storageSpreadsheets));

      resolve(Object.assign({}, newSpreadsheet));
    }, DELAY);
  });
};


export const getSpreadsheetById = (id) => (
  new Promise((resolve) => {
    setTimeout(() => {
      const spreadsheets = JSON.parse(localStorage.getItem('spreadsheets'));
      const item = spreadsheets.filter(sheet => sheet.id === id);
      resolve(item && item[0]);
    }, DELAY);
  })
);