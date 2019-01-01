import React, { useState } from 'react';

import style from './Cell.scss';
import Input from 'components/Form/Input';

const Cell = ({ rowNumber, columnNumber, cell, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(cell.value);

  const onClick = (e) => {};
  const onDoubleClick = () => setIsEditing(true);
  const onBlur = () => {};
  const onKeyPressInput = () => {};
  const onCellChange = (event) => {
    setIsEditing(true);
    setValue(event.target.value);
  };

  if (isEditing) {
    return (
      <Input
        type="text"
        onBlur={onBlur}
        onKeyPress={onKeyPressInput}
        value={value}
        onChange={onCellChange}
      />
    );
  }
  return (
    <p
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={style.row}
      role="presentation"
    >
      {value}
    </p>
  );
};

export default Cell;
