import {
  FETCHING_COLUMN_TYPES,
  FETCHING_COLUMN_TYPES_SUCCESS,
  FETCHING_COLUMN_TYPES_ERROR,

  SAVE_NEW_SPREADSHEET,
  SAVE_NEW_SPREADSHEET_SUCCESS,
  SAVE_NEW_SPREADSHEET_ERROR,

  GET_SPREADSHEET_BY_ID,
  GET_SPREADSHEET_BY_ID_SUCCESS,
  GET_SPREADSHEET_BY_ID_ERROR,

  SAVE_UPDATED_SPREADSHEET,
  SAVE_UPDATED_SPREADSHEET_SUCCESS,
  SAVE_UPDATED_SPREADSHEET_ERROR,

  ADD_NEW_COLUMN_SPREADSHEET,
  ADD_NEW_COLUMN_SPREADSHEET_SUCCESS,
  ADD_NEW_COLUMN_SPREADSHEET_ERROR,
} from 'constants/spreadsheet.constants';

import {
  getColumnTypes,
  saveLastVersionSpreadsheet,
  saveSpreadsheet,
  getSpreadsheetById,
  saveNewColumn,
} from 'api/spreadsheet.api';

const fetchAllColumnTypes = () => ({ type: FETCHING_COLUMN_TYPES });
const fetchAllColumnTypesSuccess = (columns) => ({ type: FETCHING_COLUMN_TYPES_SUCCESS, columns });
const fetchAllColumnTypesError = (error) => ({ type: FETCHING_COLUMN_TYPES_ERROR, error });

const addNewColumnSpreadsheet = () => ({ type: ADD_NEW_COLUMN_SPREADSHEET });
const addNewColumnSpreadsheetSuccess = (data) => ({ type: ADD_NEW_COLUMN_SPREADSHEET_SUCCESS, data });
const addNewColumnSpreadsheetError = (error) => ({ type: ADD_NEW_COLUMN_SPREADSHEET_ERROR, error });

const storeNewSpreadsheet = () => ({ type: SAVE_NEW_SPREADSHEET });
const storeNewSpreadsheetSuccess = (data) => ({ type: SAVE_NEW_SPREADSHEET_SUCCESS, data });
const storeNewSpreadsheetError = (error) => ({ type: SAVE_NEW_SPREADSHEET_ERROR, error });

const storeUpdatedSpreadsheet = () => ({ type: SAVE_UPDATED_SPREADSHEET });
const storeUpdatedSpreadsheetSuccess = (data) => ({ type: SAVE_UPDATED_SPREADSHEET_SUCCESS, data });
const storeUpdatedSpreadsheetError = (error) => ({ type: SAVE_UPDATED_SPREADSHEET_ERROR, error });

const fetchSpreadsheetId = () => ({ type: GET_SPREADSHEET_BY_ID });
const fetchSpreadsheetByIdSuccess = (data) => ({ type: GET_SPREADSHEET_BY_ID_SUCCESS, data });
const fetchSpreadsheetByIdError = (error) => ({ type: GET_SPREADSHEET_BY_ID_ERROR, error });

export const getAllColumnTypes = (dispatch) => {
  dispatch(fetchAllColumnTypes());

  return getColumnTypes()
    .then(res => dispatch(fetchAllColumnTypesSuccess(res)))
    .catch(err => dispatch(fetchAllColumnTypesError(err)));
};

export const saveNewColumnSpreadsheet = (id, data, dispatch) => {
  dispatch(addNewColumnSpreadsheet());

  return saveNewColumn(id, data)
    .then(res => dispatch(addNewColumnSpreadsheetSuccess(res)))
    .catch(err => dispatch(addNewColumnSpreadsheetError(err)));
};

export const saveNewSpreadsheet = (data, dispatch) => {
  dispatch(storeUpdatedSpreadsheet());

  return saveSpreadsheet(data)
    .then(res => dispatch(storeUpdatedSpreadsheetSuccess(res)))
    .catch(err => dispatch(storeUpdatedSpreadsheetError(err)));
};

export const saveUpdatedSpreadsheet = (id, data, dispatch) => {
  dispatch(storeNewSpreadsheet());

  return saveLastVersionSpreadsheet(id, data)
    .then(res => dispatch(storeNewSpreadsheetSuccess(res)))
    .catch(err => dispatch(storeNewSpreadsheetError(err)));
};

export const fetchSpreadsheetById = (data, dispatch) => {
  dispatch(fetchSpreadsheetId());

  return getSpreadsheetById(data)
    .then(res => (dispatch(fetchSpreadsheetByIdSuccess(res))))
    .catch(err => dispatch(fetchSpreadsheetByIdError(err)));
};
