import React from 'react';
import PropTypes from 'prop-types';
import { Radio as MUIRadio } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './index.styles';

function Radio(props) {
  const { name, value, onChange, defaultValue, checked } = props;

  const classes = useStyles(props);
  return (
    <MUIRadio
      name={name}
      value={value}
      checked={checked}
      defaultValue={defaultValue}
      onChange={onChange}
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
    />
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  value: '',
  defaultValue: '',
  checked: false,
};

export default Radio;
