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

const spreadsheetDefaultAction = (state) => ({
  ...state,
  fetching: true,
});

const spreadsheetDefaultActionSuccess = (state, action) => ({
  ...state,
  fetching: false,
  data: action.data,
});

const spreadsheetDefaultActionError = (state, action) => ({
  ...state,
  fetching: false,
  error: action.error,
});

const spreadsheetReducer = createReducer(initialState, {
  [FETCHING_COLUMN_TYPES]: fetchColumnTypes,
  [FETCHING_COLUMN_TYPES_SUCCESS]: fetchColumnTypesSuccess,
  [FETCHING_COLUMN_TYPES_ERROR]: fetchColumnTypesError,

  [SAVE_NEW_SPREADSHEET]: spreadsheetDefaultAction,
  [SAVE_NEW_SPREADSHEET_SUCCESS]: spreadsheetDefaultActionSuccess,
  [SAVE_NEW_SPREADSHEET_ERROR]: spreadsheetDefaultActionError,

  [GET_SPREADSHEET_BY_ID]: spreadsheetDefaultAction,
  [GET_SPREADSHEET_BY_ID_SUCCESS]: spreadsheetDefaultActionSuccess,
  [GET_SPREADSHEET_BY_ID_ERROR]: spreadsheetDefaultActionError,
});

export default spreadsheetReducer;
