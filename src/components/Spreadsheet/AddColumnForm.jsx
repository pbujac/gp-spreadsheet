import React from 'react';

import Input from 'components/Form/Input';
import Button from 'components/Button/Button';
import useForm from 'components/Form/Form';
import Select from 'components/Form/Select';

import { validateTitle } from '../../utils/validations/validationRules';
import style from './AddColumnForm.scss';

const initialState = { title: '' };
const validationRules = ({ title }) => ({
  title: validateTitle(title),
});

const AddColumnForm = ({ columns }) => {
  const { form, errors, onChange } = useForm({
    initialState,
    validation: validationRules,
  });

  const hasErrors = errors && errors.title;
  const onFormSubmit = (event) => {
    console.log(form);
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Input
        id="title"
        name="title"
        type="text"
        placeholder="Insert your title"
        value={form.title}
        errors={errors}
        onChange={onChange}
      />
      <Select
        id="type"
        name="type"
        placeholder="Select your type"
        options={columns}
        value={form.type}
        errors={errors}
        onChange={onChange}
      />

      <Button customStyle={style.submit} type="submit" theme="secondary_full" disabled={hasErrors}>Submit</Button>
    </form>
  );
};

export default AddColumnForm;
