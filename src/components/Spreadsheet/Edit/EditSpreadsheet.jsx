import React from 'react';

import Table from 'components/DataTable/Table/Table';

import style from './EditSpreadsheet.scss';

const EditSpreadsheet = ({ data }) => {
  return (
    <div className={style.edit_spreadsheet_container}>
      <h1 className={style.edit_spreadsheet_title}>Panel {data.name}</h1>
      <Table data={data} />
    </div>
  );
};

export default EditSpreadsheet;
