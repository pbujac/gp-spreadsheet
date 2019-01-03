import React from 'react';

import Cell from 'components/DataTable/Cell';
import { uniqueId } from 'utils/utils';

const isActiveCell = (activeCell, rowNumber, columnNumber) =>
  activeCell.rowNumber === rowNumber && activeCell.columnNumber === columnNumber;

const Row = ({ rowNumber, cells, activeCell, updateTableData }) => (
  cells.map((cell, columnNumber) =>
    <td key={uniqueId()}>
      <Cell
        rowNumber={rowNumber}
        columnNumber={columnNumber}
        cell={cell}
        isActive={isActiveCell(activeCell, rowNumber, columnNumber)}
        updateTableData={updateTableData}
      />
    </td>
  )
);

export default Row;
