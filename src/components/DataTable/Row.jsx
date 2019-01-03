import React from 'react';

import Cell from 'components/DataTable/Cell';
import { uniqueId } from 'utils/utils';

const Row = ({rowNumber, cells, activeCell, updateTableData, onValidateField }) => (
  cells.map((cell, columnNumber) => (
    <Cell
      key={uniqueId()}
      rowNumber={rowNumber}
      columnNumber={columnNumber}
      cell={cell}
      updateTableData={updateTableData}
      onValidateField={onValidateField}
    />
  ))
);

export default Row;
