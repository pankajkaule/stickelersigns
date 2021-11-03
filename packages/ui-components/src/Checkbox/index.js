import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox as MUICheckbox } from '@material-ui/core';
import Typography from '../Typography';
import useStyles from './index.styles';

const Checkbox = React.forwardRef((props, ref) => {
  const {
    label,
    disabled,
    value,
    onChange,
    valueLabel,
    labelColor,
    labelFont,
    labelLineHeight,
    labelMargin,
    labelSize,
  } = props;
  const classes = useStyles(props);
  return (
    <>
      <Typography
        label={label}
        color={labelColor}
        font={labelFont}
        lineHeight={labelLineHeight}
        margin={labelMargin}
        size={labelSize}
      />
      <FormControlLabel
        disabled={disabled || false}
        control={
          <MUICheckbox
            checked={value}
            onChange={onChange}
            ref={ref}
            classes={{ root: classes.checkboxRoot, checked: classes.checkboxChecked }}
          />
        }
        label={valueLabel}
        classes={{ root: classes.formLabelRoot }}
      />
    </>
  );
});

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  onChange: PropTypes.bool,
  valueLabel: PropTypes.string,
  labelColor: PropTypes.string,
  labelFont: PropTypes.string,
  labelLineHeight: PropTypes.string,
  labelMargin: PropTypes.string,
  labelSize: PropTypes.string,
};

Checkbox.defaultProps = {
  label: '',
  disabled: false,
  value: false,
  onChange: () => {},
  valueLabel: '',
  labelColor: '',
  labelFont: '',
  labelLineHeight: '',
  labelMargin: '',
  labelSize: '',
};

export default Checkbox;
