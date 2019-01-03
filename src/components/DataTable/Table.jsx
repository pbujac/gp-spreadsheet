import React from 'react';

import Row from 'components/DataTable/Row';
import useDataTable from 'components/DataTable/DataTable';
import { uniqueId } from 'utils/utils';
import Modal from 'components/Modal/Modal';
import AddColumnForm from 'components/Spreadsheet/AddColumnForm';

const Table = ({ data }) => {
  const {
    rowData,
    activeCell,
    isNewColumnAdded,
    updateTableData,
    addNewRow,
    addNewColumn,
    saveNewColumn,
    columnsData,
  } = useDataTable(data);


  const TableData = rowData.map((row, xIndex) => (
    <tr key={uniqueId()}>
      {xIndex > 0 ? <td>{xIndex}</td> : <td /> }
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
      <Modal
        showModal={isNewColumnAdded}
        title="Add new column"
        subtitle="Add new data for column"
        onCloseModal={saveNewColumn}
      >
        <AddColumnForm
          columns={columnsData}
          onSaveNewColumn={saveNewColumn}
        />
      </Modal>
      <button onClick={addNewColumn}>Add column</button>
      <table>
        <tbody>{TableData}</tbody>
      </table>
      <button onClick={addNewRow}>Add row</button>
    </div>
  );
};

export default Table;
