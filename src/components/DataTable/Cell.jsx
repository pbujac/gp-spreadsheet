import React, { useState } from 'react';

import style from './Cell.scss';
import Input from 'components/Form/Input';
import { ENTER_KEY } from 'utils/constants';

const Cell = ({ rowNumber, columnNumber, cell, isActive, updateTableData }) => {
  const [isEditing, setIsEditing] = useState(isActive);

  const onClick = (e) => {};
  const onDoubleClick = () => setIsEditing(true);
  const onBlur = () => setIsEditing(false);

  const onKeyDownInput = (event) => {
    if (event.keyCode === ENTER_KEY) {
      setIsEditing(!isEditing);
    }
  };
  const onCellChange = (event) => updateTableData(event.target.value, cell.type, rowNumber, columnNumber);

  const InputElement = (
    <Input
      type="text"
      onBlur={onBlur}
      onKeyDown={onKeyDownInput}
      value={cell.value}
      onChange={onCellChange}
      autofocus
    />
  );
  const DisplayElement = (
    <p
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={style.row}
      role="presentation"
    >
      {cell.value}
    </p>
  );

  const isValidCell = typeof cell.isValid === 'undefined' || cell.isValid === true;
  return (
    <div className={isValidCell ? '' : style.is_not_valid}>
      { isEditing ? InputElement : DisplayElement}
    </div>
  );
};

export default Cell;
