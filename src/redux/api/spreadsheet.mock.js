const spreadsheet = {
  columnTypes: [
    {
      name: 'Date',
      type: 'date',
      isRequired: false,
      filter: ['after', 'before', 'between'],
    },
    {
      name: 'Text',
      type: 'string',
      filter: ['contains', 'equalTo'],
    },
    {
      name: 'Number',
      type: 'number',
      filter: ['greaterThan', 'lessThan', 'equalTo'],
    },
    {
      name: 'Select',
      type: 'custom',
    },
  ],
  list: [],
};

export default spreadsheet;
