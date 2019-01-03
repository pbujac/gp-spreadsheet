import React, { useState } from 'react';

import style from './Cell.scss';
import Input from 'components/Form/Input';
import { ENTER_KEY } from 'utils/constants';
import { CUSTOM_LIST_NAME } from 'components/Form/Form';
import { uniqueId } from 'utils/utils';

const Cell = ({rowNumber, columnNumber, cell, isActive, updateTableData}) => {
  const [isEditing, setIsEditing] = useState(isActive);

  const onClick = (e) => {
  };
  const onDoubleClick = () => setIsEditing(true);
  const onBlur = () => setIsEditing(false);

  const onKeyDownInput = (event) => {
    if (event.keyCode === ENTER_KEY) {
      setIsEditing(!isEditing);
    }
  };
  const onCellChange = (event) =>
    updateTableData(event.target.value, cell.type, rowNumber, columnNumber);

  const uniqueID = uniqueId();
  const InputTypeElement = cell[CUSTOM_LIST_NAME] && cell[CUSTOM_LIST_NAME].length > 0
    ? (
      <div>
        here
        <input
          type="text"
          list={uniqueID}
          onChange={onCellChange}
          value={cell.value}
          autoFocus
        />

        <datalist id={uniqueID}>
          {cell[CUSTOM_LIST_NAME].map(option =>
            <option key={uniqueId()} value={option}/>)}
        </datalist>
      </div>
    )
    : (
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
      {isEditing ? InputTypeElement : DisplayElement}
    </div>
  );
};

export default Cell;
