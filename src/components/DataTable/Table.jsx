import React from 'react';

import Row from 'components/DataTable/Row';
import useDataTable from 'components/DataTable/DataTable';
import { uniqueId } from 'utils/utils';

const Table = ({ data }) => {
  const {
    rowData,
    activeCell,
    updateTableData,
    addNewRow,
    addNewColumn,
  } = useDataTable(data);

  const TableData = rowData.map((row, xIndex) => (
    <tr key={uniqueId()}>
      <Row
        rowNumber={xIndex}
        cells={row.cells}
        activeCell={activeCell}
        updateTableData={updateTableData}
      />
    </tr>
  ));

  return (
    <div>
      <button onClick={addNewColumn}>Add column</button>
      <table>
        <tbody>{TableData}</tbody>
      </table>
      <button onClick={addNewRow}>Add row</button>
    </div>
  );
};

export default Table;
