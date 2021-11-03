import React from 'react';
// import PropTypes from 'prop-types';
import { SSDropdown } from '@ss/ui-components';
import { Controller } from 'react-hook-form';
import dropdownTheme from 'themes/dropdown.theme';

function ControlledDropdown(props) {
  const { name, control, rules, label, errorMessage, list } = props;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      rules={{ ...rules }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SSDropdown
          label={label}
          value={value}
          handleChange={onChange}
          list={list}
          error={error}
          errorMessage={errorMessage}
          {...dropdownTheme('dark').secondary}
        />
      )}
    />
  );
}

export default ControlledDropdown;
