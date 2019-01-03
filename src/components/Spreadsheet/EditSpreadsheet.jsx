import React from 'react';
import Table from 'components/DataTable/Table';


const EditSpreadsheet = ({ data }) => {
  return (
    <div>
        Panel
      {data.name}

      <Table data={data} />
    </div>
  );
};

export default EditSpreadsheet;
