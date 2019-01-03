import { useContext, useEffect, useState } from 'react';
import {
  applyColumnValidationRules,
  CUSTOM_TYPE,
} from 'components/DataTable/dataTable.utils';
import { SpreadsheetDispatch, SpreadsheetState } from 'utils/constants';
import { getAllColumnTypes } from 'actions/spreadsheet.actions';
import { CUSTOM_LIST_NAME } from 'components/Form/Form';

const useDataTable = ({ rows, columns  }) => {
  const [rowData, setRowData] = useState(rows);
  const [rowLength, setRowLength] = useState(rows.length);
  const [columnLength, setColumnLength] = useState(columns.length);
  const [activeCell, setActiveCell] = useState({});
  const [isNewColumnAdded, setIsNewColumnAdded] = useState(false);

  const spreadsheet = useContext(SpreadsheetState);
  const dispatch = useContext(SpreadsheetDispatch);

  useEffect(() => {
    getAllColumnTypes(dispatch);
  }, []);

  const updateTableData = (value, type, rowNumber, columnNumber) => {
    const isValid = applyColumnValidationRules(value, type);
    const currentCellData = rowData[rowNumber].cells[columnNumber];

    currentCellData.value = value;
    currentCellData.isValid = isValid;
    console.log(currentCellData);

    /** TODO: SAVE TO DB NEW UPDATED CELLS - CALL REDUX ACTION */

    setRowData(rowData);
    setActiveCell({ rowNumber, columnNumber });
  };

  const addNewRow = () => {
    const newRowCells = { cells: [] };

    for (let y = 0; y < columnLength; y++) {
      const columnType = rowData[rowLength - 1].cells[y];
      newRowCells.cells.push({
        index: y,
        value: '',
        type: columnType.type,
        [CUSTOM_LIST_NAME]: columnType[CUSTOM_LIST_NAME],
      });
    }

    /** TODO: SAVE TO DB NEW CELLS - CALL REDUX ACTION */

    setRowLength(prevState => ++prevState);
    setRowData(prevState => [...prevState, newRowCells]);
    setActiveCell({});
  };

  const addNewColumn = () => setIsNewColumnAdded(true);

  const saveNewColumn = (formData) => {
    const columnType = formData.type;

    const listOptions = [];
    columnType === CUSTOM_TYPE && (listOptions.push(...formData[CUSTOM_LIST_NAME]));

    rowData.map((data) => {
      data.cells.push({ value: '', type: columnType,  [CUSTOM_LIST_NAME]: listOptions });
    });

    /** TODO: SAVE TO DB NEW CELLS - CALL REDUX ACTION */
    /** TODO: SAVE COLUMN TYPE - CALL REDUX ACTION */

    setColumnLength(prevState => ++prevState);
    setActiveCell({});
    setIsNewColumnAdded(false);
  };

  return {
    rowData,
    activeCell,
    isNewColumnAdded,
    updateTableData,
    addNewRow,
    addNewColumn,
    saveNewColumn,
    columnsData: spreadsheet.columns,
  };
};

export default useDataTable;
