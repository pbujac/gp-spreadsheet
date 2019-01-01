import React, { useEffect, useState } from 'react';

import Row from 'components/DataTable/Row';
import { uniqueId } from 'utils/utils';
import Cell from 'components/DataTable/Cell';

const DataTable = ({ rowLength, columnsLength, rowData }) => {
  const [currentRowData, setRowData] = useState(rowData);
  const [row, setRow] = useState(rowLength);
  const [column, setColumn] = useState(columnsLength);
  const [rows, setRows] = useState([]);

  const updateData = (rowNumber, columnNumber, value) => {
    currentRowData[rowNumber].cells[columnNumber].value = value;
    setRowData(currentRowData);
  };

  useEffect(() => {
    const table = [];

    for (let x = 0; x < row; x++) {
      for (let y = 0; y < column; y++) {
        table.push(
          <Cell
            key={uniqueId()}
            rowNumber={x}
            columnNumber={y}
            cell={rowData[x].cells[y]}
            onChange={updateData}
          />
        );
      }

      setRows(table);
    }
  }, []);

  const addRow = () => {
    const newTable = rows;
    setRow(prevState => ++prevState);

    for (let x = row; x < row + 1; x++) {
      console.log(rowData[x]);
      rowData[x].props.cells.push({
        value: 'test',
      });

      for (let y = 0; y < column; y++) {
        newTable.push(
          <Cell
            key={uniqueId()}
            rowNumber={x}
            columnNumber={y}
            cell={rowData[x].cells[y]}
            onChange={updateData}
          />
        );
      }

      setRows(newTable);
    }
  };

  return (
    <div>
      {rows}
      <button onClick={addRow}>Add row</button>
    </div>
  );
};

export default DataTable;
