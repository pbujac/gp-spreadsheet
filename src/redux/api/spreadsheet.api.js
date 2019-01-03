import { DELAY } from './delay';
import spreadsheet from './spreadsheet.mock';

const findSpreadsheet = (id) => {
  const spreadsheets = JSON.parse(localStorage.getItem('spreadsheets'));
  const item = spreadsheets.filter(sheet => sheet.id === id)[0];

  return { spreadsheets, item };
};

/** TODO: To implement get columns available types API - GET */
export const getColumnTypes = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.assign([], spreadsheet.columnTypes));
    }, DELAY);
  })
);

/** TODO: To implement save new column API - POST */
export const saveNewColumn = (id, column) => (
  new Promise(() => {
    setTimeout(() => {
      const { spreadsheets, item } = findSpreadsheet(id);
      item.columns.push(column);

      localStorage.setItem('spreadsheets', JSON.stringify(spreadsheets));
    }, DELAY);
  })
);

/** TODO: To implement init save spreadsheet API - POST */
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

/** TODO: To implement save cell data API - POST/PATCH */
export const saveCellData = (newSpreadsheet) => {
  return new Promise(() => {
    setTimeout(() => {
    }, DELAY);
  });
};

/** TODO: To implement save last updated spreadsheet API - POST/PATCH */
export const saveLastVersionSpreadsheet = (id, spreadsheetCells) => {
  return new Promise(() => {
    setTimeout(() => {
      const { spreadsheets, item } = findSpreadsheet(id);
      item.rows = spreadsheetCells;
      localStorage.setItem('spreadsheets', JSON.stringify(spreadsheets));

    }, DELAY);
  });
};

/** TODO: To implement get spreadsheet by id API - GET */
export const getSpreadsheetById = (id) => (
  new Promise((resolve) => {
    setTimeout(() => {
      const { item } = findSpreadsheet(id);
      resolve(item);
    }, DELAY);
  })
);
