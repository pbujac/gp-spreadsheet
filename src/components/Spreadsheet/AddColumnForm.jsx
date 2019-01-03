import React from 'react';

import Input from 'components/Form/Input';
import Button from 'components/Button/Button';
import useForm, { CUSTOM_LIST_NAME } from 'components/Form/Form';
import Select from 'components/Form/Select';

import { validateTitle } from '../../utils/validations/validationRules';

import style from './AddColumnForm.scss';
import { validateCustomList } from 'utils/validations/validationRules';

const initialState = {title: ''};
const validationRules = ({title, [CUSTOM_LIST_NAME]: customValue}) => ({
  title: validateTitle(title),
  [CUSTOM_LIST_NAME]: validateCustomList(customValue),
});

const AddColumnForm = ({columns, onSaveNewColumn}) => {

  const {form, errors, onChange} = useForm({
    initialState,
    validation: validationRules,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (form[CUSTOM_LIST_NAME]) {
      form[CUSTOM_LIST_NAME] = form[CUSTOM_LIST_NAME].split(',').map(item => item && item.trim());
    }

    onSaveNewColumn(form);
  };

  const hasErrors = errors && (errors.title || errors[CUSTOM_LIST_NAME]);
  const CustomSelectType = typeof form[CUSTOM_LIST_NAME] !== 'undefined' && (
    <div>
      {
        <Input
          id={CUSTOM_LIST_NAME}
          name={CUSTOM_LIST_NAME}
          type="text"
          placeholder="Insert your list item separated by comma ,"
          value={form[CUSTOM_LIST_NAME]}
          errors={errors}
          onChange={onChange}
        />
      }
    </div>
  );

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
        optionValueName="type"
        optionFieldName="name"
        errors={errors}
        onChange={onChange}
      />

      {CustomSelectType}

      <Button
        customStyle={style.submit}
        type="submit" theme="secondary_full"
        disabled={hasErrors}>
        Submit
      </Button>
    </form>
  );
};

export default AddColumnForm;
