import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { SSInput, SSButton } from '@ss/ui-components';
import { inputTheme } from 'themes/inputTheme';
import themeConstant from 'themes/constants';
import { hookFormInputField } from 'utils/helpers/errorHandlers';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function ControlledInput(props) {
  const {
    name,
    defaultValue,
    label,
    placeholder,
    errorMessage,
    rules,
    theme,
    control,
    messageLabel,
    type,
    disabled,
  } = props;
  const [visibilityType, setVisibilityType] = useState('password');

  const handleVisibility = () => {
    if (visibilityType === 'password') {
      setVisibilityType('text');
    } else if (visibilityType === 'text') {
      setVisibilityType('password');
    }
  };

  const iconStyle = {
    color: themeConstant['dark'].colorLightGrey,
    background: themeConstant['dark'].colorDarkGrey,
    padding: '6px',
    borderRadius: '50%',
    fontSize: '16px',
  };

  const inputPropsContent =
    type === 'password' ? (
      <SSButton
        onClick={handleVisibility}
        width="10px"
        height="10px"
        maxWidth="10px"
        minWidth="10px"
        padding="20px">
        {visibilityType === 'password' ? (
          <VisibilityIcon style={{ ...iconStyle }} />
        ) : (
          <VisibilityOffIcon style={{ ...iconStyle }} />
        )}
      </SSButton>
    ) : (
      ''
    );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ ...rules }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <SSInput
          disabled={disabled}
          onChange={onChange}
          value={value}
          label={label}
          placeholder={placeholder}
          {...inputTheme('dark').primary}
          {...theme}
          type={type === 'password' ? visibilityType : type}
          error={!!error}
          helperText={
            error ? hookFormInputField(messageLabel || label, error, errorMessage, rules) : null
          }
          handleClear={() => onChange('')}
          InputProps={{
            endAdornment: inputPropsContent,
          }}
        />
      )}
    />
  );
}

ControlledInput.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.string),
  rules: PropTypes.objectOf(PropTypes.string),
  messageLabel: PropTypes.string,
  type: PropTypes.string,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
};

ControlledInput.defaultProps = {
  name: '',
  defaultValue: '',
  label: '',
  placeholder: '',
  errorMessage: '',
  theme: {},
  rules: {},
  messageLabel: '',
  type: 'text',
  setValue: '',
  disabled: false,
};

export default ControlledInput;
