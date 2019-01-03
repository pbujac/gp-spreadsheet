import React from 'react';

import Row from 'components/DataTable/Row/Row';
import Modal from 'components/Modal/Modal';
import AddColumnForm from 'components/Spreadsheet/AddColumnForm/AddColumnForm';
import Button from 'components/Button/Button';
import useDataTable from 'components/DataTable/DataTable';

import { uniqueId } from 'utils/utils';

import style from './Table.scss';


const Table = ({ data }) => {
  const {
    rowData,
    isNewColumnAdded,
    updateTableData,
    addNewRow,
    setNewColumnActive,
    setNewColumnInactive,
    saveNewColumn,
    onValidateField,
    columnsData,
  } = useDataTable(data);

  const TableData = rowData.map((row, xIndex) => (
    <tr key={uniqueId()}>
      {xIndex > 0 ? <th>{xIndex}</th> : <th /> }
      <Row
        rowNumber={xIndex}
        cells={row.cells}
        updateTableData={updateTableData}
        onValidateField={onValidateField}
      />
    </tr>
  ));

  return (
    <div className={style.table_container}>
      <Modal
        showModal={isNewColumnAdded}
        title="Add new column"
        subtitle="Complete the form with new data for column"
        onCloseModal={setNewColumnInactive}
      >
        <AddColumnForm
          columns={columnsData}
          onSaveNewColumn={saveNewColumn}
        />
      </Modal>
      <Button theme="add_column" onClick={setNewColumnActive}>
        Add column
      </Button>
      <table>
        <tbody>{TableData}</tbody>
      </table>
      <Button theme="add_rows" onClick={addNewRow}>
        Add 10 rows
      </Button>
    </div>
  );
};

export default Table;
