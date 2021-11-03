import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { SSMaskedInput } from '@ss/ui-components';
import { inputTheme } from 'themes/inputTheme';
import { hookFormInputField } from 'utils/helpers/errorHandlers';

function ControlledMaskedInput(props) {
  const { name, label, errorMessage, rules, theme, control, messageLabel } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules, max: 15, min: 15, minLength: 15, maxLength: 15 }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SSMaskedInput
          onChange={onChange}
          value={value}
          label={label}
          {...inputTheme('dark').maskedInput}
          {...theme}
          error={!!error}
          helperText={error ? hookFormInputField(messageLabel || label, error, errorMessage) : null}
        />
      )}
    />
  );
}

ControlledMaskedInput.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.string),
  rules: PropTypes.objectOf(PropTypes.string),
  messageLabel: PropTypes.string,
};

ControlledMaskedInput.defaultProps = {
  name: '',
  defaultValue: '',
  label: '',
  placeholder: '',
  errorMessage: '',
  theme: {},
  rules: {},
  messageLabel: '',
};

export default ControlledMaskedInput;
