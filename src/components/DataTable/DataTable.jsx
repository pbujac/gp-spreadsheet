import { useState } from 'react';
import { applyColumnValidationRules } from 'components/DataTable/dataTable.utils';

const findColumnType = (columns, columnNumber) => columns.find(col => col.index === columnNumber);

const useDataTable = ({ rows, columns  }) => {
  const [rowData, setRowData] = useState(rows);
  const [rowLength, setRowLength] = useState(rows.length);
  const [columnLength, setColumnLength] = useState(columns.length);
  const [activeCell, setActiveCell] = useState({});

  const updateTableData = (value, type, rowNumber, columnNumber) => {
    const isValid = applyColumnValidationRules(value, type);
    const currentCellData = rowData[rowNumber].cells[columnNumber];

    currentCellData.value = value;
    currentCellData.isValid = isValid;

    setRowData(rowData);
    setActiveCell({ rowNumber, columnNumber });
  };

  const addNewRow = () => {
    const newRowCells = { index: rowLength + 1, cells: [] };

    for (let y = 0; y < columnLength; y++) {
      const columnType = findColumnType(columns, y);

      newRowCells.cells.push({ index: y, value: '', type: columnType.type});
    }

    setRowLength(prevState => ++prevState);
    setRowData(prevState => [...prevState, newRowCells]);
    setActiveCell({});
  };

  const addNewColumn = () => {
    /** TODO: ADD MODAL WITH TYPE DEFINITION - TO CHANGE*/
    const columnType = findColumnType(columns, 0);
    rowData.map((data, index) => {
      data.cells.push({ index: index, value: '', type: columnType.type });
    });

    setColumnLength(prevState => ++prevState);
    setActiveCell({});
  };

  return {
    rowData,
    activeCell,
    updateTableData,
    addNewRow,
    addNewColumn,
  };
};

export default useDataTable;
