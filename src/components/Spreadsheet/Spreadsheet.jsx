import React, { useContext, useEffect } from 'react';

import { SpreadsheetDispatch } from 'pages/SpreadsheetPage/SpreadsheetPage';

import Card from 'components/Card/Card';
import AddColumnForm from 'components/Spreadsheet/AddColumnForm';

import { getAllColumnTypes } from 'actions/spreadsheet.actions';

import style from './Spreadsheet.scss';

const Spreadsheet = ({ spreadsheet }) => {
  const dispatch = useContext(SpreadsheetDispatch);

  useEffect(() => {
    getAllColumnTypes(dispatch);
  }, []);

  const { columns } = spreadsheet || [];

  return (
    <div className={style.spreadsheet}>
      <Card
        title="Add new column"
        customStyle={style.card}
      >
        <AddColumnForm columns={columns} />
      </Card>
    </div>
  );
};

export default Spreadsheet;