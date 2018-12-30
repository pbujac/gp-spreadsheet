import { getColumnTypes } from '../api/spreadsheet.api';
import {
  FETCHING_COLUMN_TYPES,
  FETCHING_COLUMN_TYPES_SUCCESS,
  FETCHING_COLUMN_TYPES_ERROR,

  SAVE_NEW_SPREADSHEET,
  SAVE_NEW_SPREADSHEET_SUCCESS,
  SAVE_NEW_SPREADSHEET_ERROR,
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
const storeNewSpreadsheetSuccess = (columns) => ({ type: SAVE_NEW_SPREADSHEET_SUCCESS, columns });
const storeNewSpreadsheetError = (error) => ({ type: SAVE_NEW_SPREADSHEET_ERROR, error });

export const saveNewSpreadsheet = (dispatch) => {
  dispatch(storeNewSpreadsheet());

  return getColumnTypes()
    .then(res => dispatch(storeNewSpreadsheetSuccess(res)))
    .catch(err => dispatch(storeNewSpreadsheetError(err)));
};