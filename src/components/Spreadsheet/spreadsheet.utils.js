import { uniqueId } from 'utils/utils';

export const defineNewSpreadsheetData = (form) => {
  const INIT_NR_ROWS = 10;

  const rows = Array.from({ length: INIT_NR_ROWS }, () => (
    {
      cells: [
        {
          value: '',
          type: form.type,
        },
      ],
    }
  ));

  return {
    id: uniqueId(),
    name: 'Untitled' + uniqueId(),
    columns: [
      {
        index: 0,
        title: form.title,
        type: form.type,
      },
    ],
    rows,
  };
};