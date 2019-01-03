import { DELAY } from './delay';
import spreadsheet from './spreadsheet.mock';

export const getColumnTypes = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.assign([], spreadsheet.columnTypes));
    }, DELAY);
  })
);

export const saveSpreadsheet = (newSpreadsheet) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storageSpreadsheets = JSON.parse(localStorage.getItem('spreadsheets')) || [];
      storageSpreadsheets.push(newSpreadsheet);
      localStorage.setItem('spreadsheets', JSON.stringify(storageSpreadsheets));

      resolve(Object.assign({}, newSpreadsheet));
    }, DELAY);
  });
};

export const saveCellData = (newSpreadsheet) => {
  return new Promise((resolve) => {
    setTimeout(() => {
    }, DELAY);
  });
};

export const saveFinalSpreadsheet = (spreadsheet) => {
  return new Promise((resolve) => {
    setTimeout(() => {
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
