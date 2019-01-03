import React, { useEffect, useState } from 'react';

import Input from 'components/Form/Input';

import { CUSTOM_LIST_NAME } from 'components/Form/form.utils';
import { ENTER_KEY } from 'utils/constants';
import { uniqueId } from 'utils/utils';

import style from './Cell.scss';

const isRequired = (cell) => (cell.isRequired && !!cell.value || !!cell.name) || !cell.isRequired;

const Cell = ({rowNumber, columnNumber, cell, updateTableData, onValidateField }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(cell.value);
  const [isValid, setIsValid] = useState(true);
  const [isValidRequired, setIsValidRequired] = useState(true);

  useEffect(() => {
    setIsValid(onValidateField(value, cell.type, cell));
    setIsValidRequired(isRequired(cell));
  }, []);

  const onDoubleClick = () => setIsEditing(true);
  const onBlur = (event) => onCellLeave(event);

  const onKeyDownInput = (event) => event.keyCode === ENTER_KEY && onCellLeave(event);

  const onCellLeave = (event) => {
    updateTableData(event.target.value, cell.type, rowNumber, columnNumber);

    setIsEditing(false);

    setIsValidRequired(isRequired(cell));
    setIsValid(onValidateField(event.target.value, cell.type, cell));
  };

  const onCellChange = (event) => setValue(event.target.value);

  const uniqueID = uniqueId();
  cell.value = value;

  const InputTypeElement = cell[CUSTOM_LIST_NAME] && cell[CUSTOM_LIST_NAME].length > 0
    ? (
      <>
        <input
          className={style.input}
          type="text"
          list={uniqueID}
          onChange={onCellChange}
          onKeyDown={onKeyDownInput}
          onBlur={onBlur}
          value={cell.value}
          autoFocus
        />

        <datalist id={uniqueID}>
          {cell[CUSTOM_LIST_NAME].map(option =>
            <option key={uniqueId()} value={option}/>)}
        </datalist>
      </>
    )
    : (
      <Input
        className={style.input}
        type="text"
        onBlur={onBlur}
        onKeyDown={onKeyDownInput}
        value={cell.value}
        onChange={onCellChange}
        autofocus
      />
    );

  const ErrorMessage = (
    <div className={style.error_container}>
      <span className={style.error_title}>Error</span>
      Value is not matching {cell.type} rules
    </div>
  );

  const DisplayElement = (
    <p
      onDoubleClick={onDoubleClick}
      className={style.cell}
      role="presentation"
    >
      {cell.value}
    </p>
  );

  return (
    <td  className={isValid && isValidRequired ? (isEditing ? style.selected : '') : style.is_not_valid}>
      {
        !isValid || !isValidRequired ? ErrorMessage : ''
      }
      {
        isEditing ? InputTypeElement : DisplayElement
      }
    </td>
  );
};

export default Cell;
