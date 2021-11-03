import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Checkbox as MUICheckbox,
  MuiThemeProvider,
  createTheme,
  FormControlLabel,
} from '@material-ui/core';
import Typography from '../Typography';

const StyledCheckbox = withStyles((theme) => ({
  root: {
    color: '#3A3C45',
    borderRadius: '4px',
    width: '26px',
    height: '26px',
    padding: '0',
    margin: '0 20px 0 0',
    '&$checked': {
      color: theme.color,
    },
  },
  checked: {},
}))((props) => <MUICheckbox color="default" {...props} />);

const StyledFormControl = withStyles((theme) => ({
  root: {
    color: theme.valueColor,
    fontFamily: theme.valueFontFamily,
    margin: '0',
    '& > .MuiTypography-root': {
      fontFamily: theme.valueFontFamily,
      fontSize: theme.valueFontSize,
    },
  },
}))((props) => <FormControlLabel {...props} />);

const Checkbox = React.forwardRef((props, ref) => {
  const { labelTheme, valueTheme, checkboxTheme, label, valueLabel, value, onChange, disabled } =
    props;

  return (
    <>
      <Typography label={label} {...labelTheme} />
      <MuiThemeProvider theme={createTheme(checkboxTheme, valueTheme)}>
        <StyledFormControl
          disabled={disabled || false}
          control={<StyledCheckbox checked={value} onChange={onChange} ref={ref} />}
          label={valueLabel}
        />
      </MuiThemeProvider>
    </>
  );
});

Checkbox.propTypes = {
  labelTheme: PropTypes.objectOf(PropTypes.string),
  valueTheme: PropTypes.objectOf(PropTypes.string),
  checkboxTheme: PropTypes.objectOf(PropTypes.string),
  label: PropTypes.string,
  valueLabel: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  labelTheme: {
    color: '#8C8C8C',
    lineHeight: '16px',
    size: '12px',
    font: 'Typold Regular',
    margin: '0 0 15px 0',
  },
  valueTheme: {
    valueColor: '#FFFFFF',
    lineHeight: '19px',
    valueFontSize: '14px',
    valueFontFamily: 'Typold Regular',
    margin: '0',
  },
  checkboxTheme: {
    color: '#83D4FF',
  },
  label: '',
  valueLabel: '',
  value: true,
  onChange: () => {},
};

export default Checkbox;
