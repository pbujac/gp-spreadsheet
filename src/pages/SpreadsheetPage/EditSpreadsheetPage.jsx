import React, { useContext, useEffect } from 'react';

import EditSpreadsheet from 'components/Spreadsheet/Edit/EditSpreadsheet';

import { SpreadsheetDispatch, SpreadsheetState } from 'utils/constants';
import { fetchSpreadsheetById } from 'actions/spreadsheet.actions';

const EditSpreadsheetPage = (props) => {
  const state = useContext(SpreadsheetState);
  const dispatch = useContext(SpreadsheetDispatch);

  useEffect(() => {
    const id = props.location.state.id;
    fetchSpreadsheetById(id, dispatch);
  }, []);

  const { data } = state || {};
  if (data) {
    return (
      <EditSpreadsheet data={data} />
    );
  }

  return null;
};

export default EditSpreadsheetPage;
