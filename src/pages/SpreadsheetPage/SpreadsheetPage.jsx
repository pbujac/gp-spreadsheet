import React, { useReducer, createContext } from 'react';

import Spreadsheet from 'components/Spreadsheet/Spreadsheet';
import spreadsheetReducer from 'reducers/spreadsheet.reducer';

export const SpreadsheetDispatch = createContext();

const SpreadsheetPage = () => {
  const [spreadsheet, dispatch] = useReducer(spreadsheetReducer);

  return (
    <SpreadsheetDispatch.Provider value={dispatch}>
      <Spreadsheet spreadsheet={spreadsheet} />
    </SpreadsheetDispatch.Provider>
  );
};

export default SpreadsheetPage;