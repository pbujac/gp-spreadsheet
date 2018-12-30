import { useState } from 'react';

const useFrom = ({ initialState, validation }) => {
  const [state, setState] = useState(initialState);
  let errors = {};

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
