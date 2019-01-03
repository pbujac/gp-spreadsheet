import { useEffect, useState } from 'react';
import { CUSTOM_TYPE } from 'components/DataTable/dataTable.utils';

export const CUSTOM_LIST_NAME = 'customList';

const useFrom = ({ initialState, validation }) => {
  const [state, setState] = useState(initialState);
  let errors = {};

  useEffect(() => {
    if (state.type === CUSTOM_TYPE) {
      addNewColumnField();
    } else {
      delete state[CUSTOM_LIST_NAME];
      setState(state);
    }
  }, [state.type]);

  const addNewColumnField = () => {
    state[CUSTOM_LIST_NAME] = '';
    setState(state);
  };

  const onChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  if (validation) {
    errors = validation(state);
  }

  return {
    form: state,
    errors,
    onChange,
  };
};

export default useFrom;
