import React from 'react';
import Cell from 'components/DataTable/Cell';
import { uniqueId } from 'utils/utils';

const Row = ({ rowNumber, columnLength, rowData, updateData}) => {
  const cells = [];

  const setCells = () => {
    for (let y = 0; y < columnLength; y++) {
      cells.push(
        <Cell
          key={uniqueId()}
          rowNumber={rowNumber}
          columnNumber={y}
          cell={rowData.cells[y]}
          onChange={updateData}
        />
      );
    }
  };

  setCells.call(this);

  return (<div>{cells}</div>);
};

export default Row;
