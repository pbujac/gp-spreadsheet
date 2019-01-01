import React, { useEffect } from 'react';
import DataTable from 'components/DataTable/DataTable';


const EditSpreadsheet = ({ data }) => {
  return (
    <div>
        Panel
      {data.name}

      <DataTable
        columnsLength={data.columns.length}
        rowLength={data.rows.length}
        rowData={data.rows}
      />
    </div>
  );
};

export default EditSpreadsheet;
