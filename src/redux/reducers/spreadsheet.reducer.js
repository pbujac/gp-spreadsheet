import {
  FETCHING_COLUMN_TYPES,
  FETCHING_COLUMN_TYPES_SUCCESS,
  FETCHING_COLUMN_TYPES_ERROR,

  SAVE_NEW_SPREADSHEET,
  SAVE_NEW_SPREADSHEET_SUCCESS,
  SAVE_NEW_SPREADSHEET_ERROR, GET_SPREADSHEET_BY_ID, GET_SPREADSHEET_BY_ID_SUCCESS, GET_SPREADSHEET_BY_ID_ERROR,
} from 'constants/spreadsheet.constants';

import { createReducer } from './utils';

const initialState = {
  columns: [],
  fetching: false,
  error: null,
};

const fetchColumnTypes = (state) => ({
  ...state,
  fetching: true,
});

const fetchColumnTypesSuccess = (state, action) => ({
  ...state,
  fetching: false,
  columns: action.columns,
});

const fetchColumnTypesError = (state, action) => ({
  ...state,
  fetching: false,
  error: action.error,
});


const saveSpreadsheet = (state) => ({
  ...state,
  fetching: true,
});

const saveSpreadsheetSuccess = (state, action) => ({
  ...state,
  fetching: false,
  data: action.data,
});

const saveSpreadsheetError = (state, action) => ({
  ...state,
  fetching: false,
  error: action.error,
});

const getSpreadsheet = (state) => ({
  ...state,
  fetching: true,
});

const getSpreadsheetSuccess = (state, action) => ({
  ...state,
  fetching: false,
  data: action.data,
});

const getSpreadsheetError = (state, action) => ({
  ...state,
  fetching: false,
  error: action.error,
});


const spreadsheetReducer = createReducer(initialState, {
  [FETCHING_COLUMN_TYPES]: fetchColumnTypes,
  [FETCHING_COLUMN_TYPES_SUCCESS]: fetchColumnTypesSuccess,
  [FETCHING_COLUMN_TYPES_ERROR]: fetchColumnTypesError,

  [SAVE_NEW_SPREADSHEET]: saveSpreadsheet,
  [SAVE_NEW_SPREADSHEET_SUCCESS]: saveSpreadsheetSuccess,
  [SAVE_NEW_SPREADSHEET_ERROR]: saveSpreadsheetError,

  [GET_SPREADSHEET_BY_ID]: getSpreadsheet,
  [GET_SPREADSHEET_BY_ID_SUCCESS]: getSpreadsheetSuccess,
  [GET_SPREADSHEET_BY_ID_ERROR]: getSpreadsheetError,
});

export default spreadsheetReducer;