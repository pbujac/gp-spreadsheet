import { getColumnTypes, saveSpreadsheet, getSpreadsheetById } from '../api/spreadsheet.api';
import {
  FETCHING_COLUMN_TYPES,
  FETCHING_COLUMN_TYPES_SUCCESS,
  FETCHING_COLUMN_TYPES_ERROR,

  SAVE_NEW_SPREADSHEET,
  SAVE_NEW_SPREADSHEET_SUCCESS,
  SAVE_NEW_SPREADSHEET_ERROR, GET_SPREADSHEET_BY_ID, GET_SPREADSHEET_BY_ID_SUCCESS, GET_SPREADSHEET_BY_ID_ERROR,
} from 'constants/spreadsheet.constants';

const fetchAllColumnTypes = () => ({ type: FETCHING_COLUMN_TYPES });
const fetchAllColumnTypesSuccess = (columns) => ({ type: FETCHING_COLUMN_TYPES_SUCCESS, columns });
const fetchAllColumnTypesError = (error) => ({ type: FETCHING_COLUMN_TYPES_ERROR, error });

export const getAllColumnTypes = (dispatch) => {
  dispatch(fetchAllColumnTypes());

  return getColumnTypes()
    .then(res => dispatch(fetchAllColumnTypesSuccess(res)))
    .catch(err => dispatch(fetchAllColumnTypesError(err)));
};


const storeNewSpreadsheet = () => ({ type: SAVE_NEW_SPREADSHEET });
const storeNewSpreadsheetSuccess = (data) => ({ type: SAVE_NEW_SPREADSHEET_SUCCESS, data });
const storeNewSpreadsheetError = (error) => ({ type: SAVE_NEW_SPREADSHEET_ERROR, error });

export const saveNewSpreadsheet = (data, dispatch) => {
  dispatch(storeNewSpreadsheet());

  return saveSpreadsheet(data)
    .then(res => dispatch(storeNewSpreadsheetSuccess(res)))
    .catch(err => dispatch(storeNewSpreadsheetError(err)));
};

const fetchSpreadsheetId = () => ({ type: GET_SPREADSHEET_BY_ID });
const fetchSpreadsheetByIdSuccess = (data) => ({ type: GET_SPREADSHEET_BY_ID_SUCCESS, data });
const fetchSpreadsheetByIdError = (error) => ({ type: GET_SPREADSHEET_BY_ID_ERROR, error });


export const fetchSpreadsheetById = (data, dispatch) => {
  dispatch(fetchSpreadsheetId());

  return getSpreadsheetById(data)
    .then(res => (dispatch(fetchSpreadsheetByIdSuccess(res))))
    .catch(err => dispatch(fetchSpreadsheetByIdError(err)));
};
