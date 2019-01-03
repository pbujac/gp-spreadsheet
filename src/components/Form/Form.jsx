import { useEffect, useState } from 'react';
import { CUSTOM_TYPE } from 'components/DataTable/dataTable.utils';

export const CUSTOM_LIST_NAME = 'customList';

const useFrom = ({ initialState, validation }) => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

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

    validateField([name], value );
  };

  const validateForm = () => {
    if (validation) {
      const formErrors = validation(state);
      setErrors(formErrors);

      return formErrors;
    }

    return errors;
  };

  const validateField = (name, value) => {
    if (validation) {
      errors[name] = validation({ [name]: value })[name];
      setErrors(errors);
    }
  };

  return {
    form: state,
    errors,
    onChange,
    validateField,
    validateForm,
  };
};

export default useFrom;
