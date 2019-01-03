import React from 'react';

import Input from 'components/Form/Input';
import Select from 'components/Form/Select';
import Button from 'components/Button/Button';
import useForm from 'components/Form/Form';

import { CUSTOM_LIST_NAME } from 'components/Form/form.utils';
import {
  validateCustomList, validateSelect,
  validateTitle,
} from 'utils/validations/validationRules';

import style from './AddColumnForm.scss';

const initialState = {
  title: '',
  type: '',
  isRequired: false,
};

const validationRules = ({ title, [CUSTOM_LIST_NAME]: customValue, type }) => ({
  title: validateTitle(title),
  [CUSTOM_LIST_NAME]: validateCustomList(customValue),
  type: validateSelect(type),
});

const hasFormErrors = (data) => data && (data.title || data[CUSTOM_LIST_NAME] || data.type);

const AddColumnForm = ({columns, onSaveNewColumn}) => {
  const { form, errors, onChange, validateForm } = useForm({
    initialState,
    validation: validationRules,
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!hasFormErrors(validateForm())) {
      if (form[CUSTOM_LIST_NAME]) {
        form[CUSTOM_LIST_NAME] = form[CUSTOM_LIST_NAME].split(',');
      }

      onSaveNewColumn(form);
    }
  };

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
        labelName="Title"
        placeholder="Insert your title"
        value={form.title}
        errors={errors}
        onChange={onChange}
      />

      <Select
        id="type"
        name="type"
        labelName="Type column"
        placeholder="Select your type"
        options={columns}
        value={form.type}
        optionValueName="type"
        optionFieldName="name"
        errors={errors}
        onChange={onChange}
      />

      <Input
        id="colRequired"
        labelName="Is required"
        name="isRequired"
        type="checkbox"
        value={form.isRequired}
        errors={errors}
        onChange={onChange}
      />

      {CustomSelectType}

      <Button
        customStyle={style.submit}
        type="submit"
        theme="secondary_full"
        disabled={hasFormErrors(errors)}>
        Submit
      </Button>
    </form>
  );
};

export default AddColumnForm;
