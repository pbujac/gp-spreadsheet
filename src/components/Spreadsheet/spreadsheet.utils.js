import { uniqueId } from 'utils/utils';
import { CUSTOM_TYPE } from 'components/DataTable/dataTable.utils';
import { CUSTOM_LIST_NAME } from 'components/Form/Form';

export const INIT_NR_ROWS = 10;
export const defineNewSpreadsheetData = (form) => {
  const listOptions = [];
  form.type === CUSTOM_TYPE && (listOptions.push(...form[CUSTOM_LIST_NAME]));

  const rows = Array.from({ length: INIT_NR_ROWS }, () => (
    {
      cells: [
        {
          value: '',
          type: form.type,
          isRequired: form.isRequired,
          [CUSTOM_LIST_NAME]: listOptions,
        },
      ],
    }
  ));


  return {
    id: uniqueId(),
    name: 'Untitled' + uniqueId(),
    columns: [
      {
        title: form.title,
        type: form.type,
        isRequired: form.isRequired,
        [CUSTOM_LIST_NAME]: listOptions,
      },
    ],
    rows,
  };
};
