import React from 'react';
import PropTypes from 'prop-types';
import { InputAdornment, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './index.styles';
import Button from '../Button';

function SearchBox(props) {
  const { placeholder, onChange, onBlur, iconColor, disabled, handleClear, autoFocus, value } =
    props;
  const classes = useStyles(props);
  return (
    <TextField
      placeholder={placeholder}
      className={classes.root}
      onChange={onChange}
      disabled={disabled}
      onBlur={onBlur}
      value={value}
      autoFocus={autoFocus}
      autoComplete="off"
      InputProps={{
        autoComplete: 'off',
        startAdornment: (
          <InputAdornment position="start">
            <Search className={classes.icon} />
          </InputAdornment>
        ),
        endAdornment: value && (
          <InputAdornment position="end">
            <Button
              width="10px"
              height="10px"
              maxWidth="10px"
              minWidth="10px"
              styles={{ padding: '20px' }}
              onClick={handleClear}>
              <CloseIcon style={{ color: iconColor, fontSize: '14px', padding: '5px' }} />
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  handleClear: PropTypes.func,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
};

SearchBox.defaultProps = {
  placeholder: '',
  onChange: () => {},
  onBlur: () => {},
  iconColor: '',
  disabled: false,
  handleClear: () => {},
  autoFocus: false,
  value: '',
};

export default SearchBox;
