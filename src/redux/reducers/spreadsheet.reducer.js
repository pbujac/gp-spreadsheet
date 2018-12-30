import {
  FETCHING_COLUMN_TYPES,
  FETCHING_COLUMN_TYPES_SUCCESS,
  FETCHING_COLUMN_TYPES_ERROR,

  SAVE_NEW_SPREADSHEET,
  SAVE_NEW_SPREADSHEET_SUCCESS,
  SAVE_NEW_SPREADSHEET_ERROR,
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
  columns: action.error,
});

const spreadsheetReducer = createReducer(initialState, {
  [FETCHING_COLUMN_TYPES]: fetchColumnTypes,
  [FETCHING_COLUMN_TYPES_SUCCESS]: fetchColumnTypesSuccess,
  [FETCHING_COLUMN_TYPES_ERROR]: fetchColumnTypesError,

  [SAVE_NEW_SPREADSHEET]: {},
  [SAVE_NEW_SPREADSHEET_SUCCESS]: fetchColumnTypesError,
  [SAVE_NEW_SPREADSHEET_ERROR]: fetchColumnTypesError,
});

export default spreadsheetReducer;