import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Grid } from '@material-ui/core';
import Button from '../Button/index';
import Typography from '../Typography/index';
import useStyles from './index.styles';

function Range(props) {
  const {
    value,
    valueThreshold,
    onChange,
    btnLabel1,
    btnLabel2,
    buttonBgColor,
    buttonColor,
    buttonHeight,
    buttonWidth,
    buttonMinWidth,
    title,
    labelColor,
    labelSize,
    name,
    disabled,
    disabledColor,
    disabledBgColor,
  } = props;
  const classes = useStyles(props);
  const buttonStyle = {
    backgroundColor: buttonBgColor,
    onHoverBgColor: buttonBgColor,
    onHoverColor: buttonColor,
    height: buttonHeight,
    width: buttonWidth,
    minWidth: buttonMinWidth,
    border: 'none',
    color: buttonColor,
    disabledColor,
    disabledBgColor,
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '19px',
    onHoverBorder: '',
    padding: '10px 20px 11px',
    variant: 'contained',
  };
  const typographyStyle = {
    color: disabled ? disabledColor : labelColor,
    font: 'Typold Regular',
    label: title,
    lineHeight: '16px',
    margin: ' 0 0 1em 0',
    size: labelSize,
    textAlign: 'left',
  };

  return (
    <Grid container direction="column">
      <Typography {...typographyStyle} />
      <ButtonGroup className={classes.root} disabled={disabled}>
        <Button onClick={() => onChange(name, value + valueThreshold)} {...buttonStyle}>
          {btnLabel1}
        </Button>
        <Grid container justify="center" alignItems="center">
          <Typography
            color={disabled ? disabledColor : 'inherit'}
            fontSize="Typold Regular"
            label={value}
            lineHeight="25px"
            margin="0"
            size="12px"
            textAlign="center"
          />
        </Grid>
        <Button onClick={() => onChange(name, value - valueThreshold)} {...buttonStyle}>
          {btnLabel2}
        </Button>
      </ButtonGroup>
    </Grid>
  );
}

Range.propTypes = {
  value: PropTypes.number,
  valueThreshold: PropTypes.number,
  onChange: PropTypes.func,
  btnLabel1: PropTypes.string || PropTypes.node,
  btnLabel2: PropTypes.string || PropTypes.node,
  labelColor: '',
  labelSize: '',
  title: '',
  buttonBgColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonHeight: PropTypes.string,
  buttonWidth: PropTypes.string,
  buttonMinWidth: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  disabledBgColor: PropTypes.string,
};

Range.defaultProps = {
  value: 0,
  valueThreshold: 1,
  onChange: () => {},
  btnLabel1: 'I',
  btnLabel2: 'D',
  labelColor: '',
  labelSize: '',
  title: '',
  buttonBgColor: '',
  buttonColor: '',
  buttonHeight: '',
  buttonWidth: '',
  buttonMinWidth: '',
  name: '',
  disabled: false,
  disabledColor: '',
  disabledBgColor: '',
};

export default Range;
