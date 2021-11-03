import React from 'react';
import PropTypes from 'prop-types';
import { Autocomplete as MUIAutocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import useStyles from './index.styles';

const Autocomplete = React.forwardRef((props, ref) => {
  const {
    label,
    options,
    onChange,
    handleAddOption,
    width,
    error,
    helperText,
    value,
    onInputChange,
    disabled,
  } = props;
  const classes = useStyles(props);
  const defaultProps = {
    options,
    getOptionLabel: (option) => option.title,
  };
  return (
    <MUIAutocomplete
      {...defaultProps}
      style={{ width }}
      onChange={onChange}
      clearOnBlur={false}
      classes={{
        root: classes.root,
        inputRoot: classes.inputRoot,
        groupLabel: label,
        input: classes.input,
        endAdornment: classes.endAdornment,
        paper: classes.paper,
        popper: classes.popper,
        listbox: classes.listBox,
        noOptions: classes.noOptions,
      }}
      ref={ref}
      value={value}
      onBlur={handleAddOption}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          InputLabelProps={{ shrink: true }}
          label={label}
          error={error}
          onChange={onInputChange}
          helperText={helperText}
        />
      )}
    />
  );
});

Autocomplete.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  handleAddOption: PropTypes.func,
  width: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.objectOf(PropTypes.string),
  onInputChange: PropTypes.func,
};

Autocomplete.defaultProps = {
  label: '',
  options: [],
  onChange: () => {},
  handleAddOption: () => {},
  width: '270px',
  error: false,
  helperText: '',
  disabled: false,
  value: {},
  onInputChange: () => {},
};

export default Autocomplete;
