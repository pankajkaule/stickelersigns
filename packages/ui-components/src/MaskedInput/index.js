import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import useStyles from './index.styles';

function MaskInput(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['+', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask={false}
      guide={false}
    />
  );
}

MaskInput.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default function MaskedInputComponent(props) {
  const { value, onChange, name, label, inputWidth, error, helperText, helperTextColor } = props;
  const classes = useStyles(props);
  return (
    <FormControl style={{ width: inputWidth }} error={error}>
      <InputLabel
        shrink
        htmlFor="masked-input-field"
        classes={{ focused: classes.labelFocused, root: classes.labelRoot }}>
        {label}
      </InputLabel>
      <Input
        value={value}
        onChange={onChange}
        name={name}
        id="masked-input-field"
        inputComponent={MaskInput}
        classes={{ input: classes.inputRoot, formControl: classes.formControl }}
        disableUnderline
      />
      {error ? (
        <FormHelperText style={{ color: helperTextColor }}>{helperText}</FormHelperText>
      ) : (
        ''
      )}
    </FormControl>
  );
}

MaskedInputComponent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  inputWidth: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  helperTextColor: PropTypes.string,
};

MaskedInputComponent.defaultProps = {
  value: '',
  onChange: () => {},
  name: '',
  label: '',
  inputWidth: '',
  error: false,
  helperText: '',
  helperTextColor: '',
};
