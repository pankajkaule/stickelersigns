import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './index.styles';
import Button from '../Button';
import inputTheme from '../Themes/inputTheme';

const InputComponent = React.forwardRef((props, ref) => {
  const {
    label,
    placeholder,
    type,
    onChange,
    value,
    defaultValue,
    error,
    helperText,
    name,
    InputProps,
    disabled,
    inputComponent,
    handleClear,
    iconColor,
    inputProps,
    useDefault,
    theme,
    themeType,
    autoFocus,
  } = props;
  const themeContainer = useDefault ? inputTheme(theme, props.width)[themeType] : props;

  const classes = useStyles(themeContainer);
  return (
    <TextField
      {...props}
      label={label}
      name={name}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      className={classes.root}
      type={type}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      ref={ref}
      error={error}
      autoFocus={autoFocus}
      helperText={helperText}
      InputProps={{
        ...inputProps,
        autoComplete: 'off',
        endAdornment: value && !disabled && (
          <Button
            width="10px"
            height="10px"
            maxWidth="10px"
            minWidth="10px"
            padding="20px"
            onClick={handleClear}>
            <CloseIcon style={{ color: iconColor, fontSize: '14px' }} />
          </Button>
        ),
        ...InputProps,
      }}
      autoComplete="off"
      disabled={disabled}
      inputComponent={inputComponent}
    />
  );
});

InputComponent.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string,
  InputProps: PropTypes.objectOf(PropTypes.any),
  disabled: PropTypes.bool,
  handleClear: PropTypes.func,
  iconColor: PropTypes.string,
  useDefault: PropTypes.bool,
  theme: PropTypes.string,
  themeType: PropTypes.string,
};

InputComponent.defaultProps = {
  label: '',
  placeholder: '',
  type: '',
  onChange: () => {},
  value: '',
  defaultValue: '',
  error: false,
  helperText: '',
  width: '100%',
  name: '',
  InputProps: {},
  disabled: false,
  handleClear: () => {},
  iconColor: '#FFF',
  useDefault: true,
  theme: 'dark',
  themeType: 'primary',
};

export default InputComponent;
