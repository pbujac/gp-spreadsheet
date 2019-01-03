import { useContext, useEffect, useState } from 'react';

import {
  applyColumnValidationRules,
  CUSTOM_TYPE,
} from 'components/DataTable/dataTable.utils';
import { SpreadsheetDispatch, SpreadsheetState } from 'utils/constants';
import {
  getAllColumnTypes,
  saveNewColumnSpreadsheet,
  saveUpdatedSpreadsheet,
} from 'actions/spreadsheet.actions';
import { INIT_NR_ROWS } from 'components/Spreadsheet/spreadsheet.utils';
import { CUSTOM_LIST_NAME } from 'components/Form/form.utils';


const getInitColumnName = ({ title }) => ({
  name: title,
  value: title,
  isRequired: true,
  [CUSTOM_LIST_NAME]: [],
});

const useDataTable = ({ id, rows, columns }) => {
  const [rowData, setRowData] = useState(rows);
  const [rowLength, setRowLength] = useState(rows.length);
  const [columnLength, setColumnLength] = useState(columns.length);
  const [isNewColumnAdded, setIsNewColumnAdded] = useState(false);

  const spreadsheet = useContext(SpreadsheetState);
  const dispatch = useContext(SpreadsheetDispatch);

  useEffect(() => {
    getAllColumnTypes(dispatch);
    setRowWithColumnNames();
  }, []);

  const setRowWithColumnNames = () => {
    const newRowCells = { cells: [] };

    columns.forEach((col) => newRowCells.cells.push(getInitColumnName(col)));

    rowData.unshift(newRowCells);
    setRowData(rowData);
  };

  const updateTableData = (value, type, rowNumber, columnNumber) => {
    const currentCellData = rowData[rowNumber].cells[columnNumber];
    currentCellData.value = value;

    saveUpdatedSpreadsheet(id, rowData, dispatch);
  };

  const onValidateField = (value, type, currentCellData) =>
    applyColumnValidationRules(value, type, currentCellData);

  const addNewRow = () => {
    const allRows = [];

    for (let i = 0; i < INIT_NR_ROWS; i++) {
      const newRowCells = { cells: [] };

      for (let y = 0; y < columnLength; y++) {
        const columnType = rowData[rowLength - 1].cells[y];

        newRowCells.cells.push({
          value: '',
          type: columnType.type,
          isRequired: columnType.isRequired,
          [CUSTOM_LIST_NAME]: columnType[CUSTOM_LIST_NAME],
        });
      }

      allRows.push(newRowCells);
    }

    /** TODO: SAVE TO DB NEW CELLS - CALL REDUX ACTION */

    setRowLength(prevState => prevState + INIT_NR_ROWS);
    setRowData(prevState => [...prevState, ...allRows]);
  };

  const setNewColumnActive = () => setIsNewColumnAdded(true);
  const setNewColumnInactive = () => setIsNewColumnAdded(false);

  const saveNewColumn = (formData) => {
    const columnType = formData.type;
    const listOptions = [];
    const columnName = getInitColumnName(formData);

    columnType === CUSTOM_TYPE && (listOptions.push(...formData[CUSTOM_LIST_NAME]));
    rowData.map((data, index) => {
      index === 0
        ? data.cells.push(columnName)
        : data.cells.push({
          value: '',
          type: columnType,
          isRequired: formData.isRequired,
          [CUSTOM_LIST_NAME]: listOptions,
        });
    });

    /** TODO: SAVE TO DB NEW CELLS - CALL REDUX ACTION */
    /** TODO: EXAMPLE: SAVE COLUMN TYPE - CALL REDUX ACTION */
    saveNewColumnSpreadsheet(id, {
      title: formData.title,
      type: columnType,
      isRequired: formData.isRequired,
    }, dispatch);

    setColumnLength(prevState => ++prevState);
    setIsNewColumnAdded(false);
    setRowData(rowData);
  };

  return {
    rowData,
    isNewColumnAdded,
    updateTableData,
    addNewRow,
    setNewColumnActive,
    setNewColumnInactive,
    saveNewColumn,
    onValidateField,
    columnsData: spreadsheet.columns,
  };
};

export default useDataTable;
