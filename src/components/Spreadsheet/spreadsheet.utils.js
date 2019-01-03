import { uniqueId } from 'utils/utils';

export const INIT_NR_ROWS = 10;
export const defineNewSpreadsheetData = (form) => {
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
