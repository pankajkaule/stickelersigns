import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { SSAutocomplete } from '@ss/ui-components';
import dropdownTheme from 'themes/dropdown.theme';

function ControlledAutocomplete(props) {
  const { control, list, handleAddOption, setValue, name, errorMessage, rules, label, disabled } =
    props;
  const [valueToAdd, setValueToAdd] = useState('');

  const newOptionGenerator = () => {
    let valuePresent = false;
    if (list && list.length) {
      list.forEach((item) => {
        if (item.value === valueToAdd) {
          valuePresent = true;
        }
      });
    }
    if (!valuePresent && valueToAdd.trim() !== '') {
      const optionsCopy = Array.from(list);
      let objToPush = { value: valueToAdd.trim(), title: valueToAdd.trim() };
      optionsCopy.push(objToPush);
      setValue(name, objToPush);
      handleAddOption(optionsCopy);
    }
  };
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      rules={{ ...rules }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SSAutocomplete
          disabled={disabled}
          label={label}
          value={value}
          onChange={(e, v) => onChange(v)}
          options={list}
          error={error}
          helperText={error ? errorMessage : ''}
          handleAddOption={newOptionGenerator}
          onInputChange={(e) => setValueToAdd(e.target.value)}
          {...dropdownTheme('dark').autoComplete}
        />
      )}
    />
  );
}

ControlledAutocomplete.propTypes = {
  control: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  handleAddOption: PropTypes.func,
  setValue: PropTypes.func,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  rules: PropTypes.objectOf(PropTypes.string),
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

ControlledAutocomplete.defaultProps = {
  list: [],
  handleAddOption: () => {},
  setValue: () => {},
  name: '',
  errorMessage: '',
  rules: {},
  label: '',
  disabled: false,
};

export default ControlledAutocomplete;
