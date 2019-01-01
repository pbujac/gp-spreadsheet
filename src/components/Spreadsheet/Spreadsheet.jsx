import React, { useContext, useEffect, useState } from 'react';

import { SpreadsheetDispatch, SpreadsheetState } from 'utils/constants';

import Card from 'components/Card/Card';
import AddColumnForm from 'components/Spreadsheet/AddColumnForm';

import { getAllColumnTypes, saveNewSpreadsheet } from 'actions/spreadsheet.actions';

import style from './Spreadsheet.scss';
import { Redirect } from 'react-router-dom';

const Spreadsheet = () => {
  const spreadsheet = useContext(SpreadsheetState);
  const dispatch = useContext(SpreadsheetDispatch);

  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    getAllColumnTypes(dispatch);
  }, []);

  const onSaveNewSpreadsheet = (form) => {
    saveNewSpreadsheet(form, dispatch).then(() => setIsRedirect(true));
  };
  const { columns, data } = spreadsheet || [];

  if (isRedirect) {
    const pathname = '/edit-spreadsheet';
    return <Redirect to={{
      pathname,
      state: { id : data.id },
    }}  />;
  }
  return (
    <div className={style.spreadsheet}>
      <Card
        title="Add new column"
        customStyle={style.card}
      >
        <AddColumnForm columns={columns} onSaveNewSpreadsheet={onSaveNewSpreadsheet} />
      </Card>
    </div>
  );
};

export default Spreadsheet;