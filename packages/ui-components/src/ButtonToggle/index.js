import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Grid } from '@material-ui/core';
import Button from '../Button/index';
import useStyles from './index.styles';
import Typography from '../Typography';

function ButtonToggle(props) {
  const {
    handleSelect,
    value,
    list,
    showLabel,
    labelColor,
    title,
    labelSize,
    inActiveBtnBgColor,
    inActiveBtnColor,
    btnHeight,
    btnPadding,
    btnMargin,
    btnWidth,
    btnMinWidth,
    borderRadius,
    activeBtnBgColor,
    activeBtnColor,
    name,
    disableElevation,
    disabled,
    disabledColor,
    disabledBgColor,
  } = props;
  const classes = useStyles(props);
  const handleClick = (val) => {
    handleSelect(name, val);
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

  const inActiveStyle = {
    backgroundColor: inActiveBtnBgColor,
    border: 'none',
    color: inActiveBtnColor,
    fill: inActiveBtnColor,
    disabledColor,
    disabledBgColor: 'transparent',
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    height: btnHeight,
    lineHeight: '19px',
    onHoverBgColor: inActiveBtnBgColor,
    onHoverBorder: '',
    onHoverColor: inActiveBtnColor,
    padding: btnPadding,
    margin: btnMargin,
    width: btnWidth,
    minWidth: btnMinWidth,
    borderRadius,
  };

  const activeStyle = {
    backgroundColor: activeBtnBgColor,
    border: 'none',
    color: activeBtnColor,
    fill: activeBtnColor,
    disabledColor,
    disabledBgColor,
    fontFamily: 'Typold Bold',
    fontSize: '12px',
    lineHeight: '19px',
    onHoverBgColor: activeBtnBgColor,
    onHoverBorder: '',
    onHoverColor: activeBtnColor,
    height: btnHeight,
    padding: btnPadding,
    margin: btnMargin,
    width: btnWidth,
    minWidth: btnMinWidth,
    borderRadius,
  };

  const buttonsContent = list.length
    ? list.map((el) => {
        const style = value === el.value ? activeStyle : inActiveStyle;
        return el.label && el.label !== undefined ? (
          <Button onClick={() => handleClick(el.value)} variant="contained" {...style}>
            {el.label}
          </Button>
        ) : (
          <Button onClick={() => handleClick(el.value)} variant="contained" {...style}>
            <el.component />
          </Button>
        );
      })
    : '';

  const labelContent = showLabel ? <Typography {...typographyStyle} /> : '';

  return (
    <Grid container direction="column">
      {labelContent}
      <ButtonGroup
        className={classes.root}
        classes={{ groupedHorizontal: classes.groupedHorizontal }}
        disableElevation={disableElevation}
        disabled={disabled}>
        {buttonsContent}
      </ButtonGroup>
    </Grid>
  );
}

ButtonToggle.propTypes = {
  labelSize: PropTypes.oneOf(['xl', 'lg', 'md', 'sm']),
  handleSelect: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  list: PropTypes.shape([{ value: '', label: '' }]),
  labelColor: PropTypes.string,
  title: PropTypes.string,
  inActiveBtnBgColor: PropTypes.string,
  inActiveBtnColor: PropTypes.string,
  activeBtnBgColor: PropTypes.string,
  activeBtnColor: PropTypes.string,
  btnHeight: PropTypes.string,
  btnPadding: PropTypes.string,
  btnMargin: PropTypes.string,
  showLabel: PropTypes.bool,
  btnWidth: PropTypes.string,
  btnMinWidth: PropTypes.string,
  borderRadius: PropTypes.string,
  name: PropTypes.string,
  disableElevation: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledBgColor: PropTypes.string,
  disabledBorder: PropTypes.string,
  disabledColor: PropTypes.string,
};

ButtonToggle.defaultProps = {
  list: [],
  defaultValue: '',
  handleSelect: () => {},
  value: '',
  labelColor: '',
  title: '',
  inActiveBtnBgColor: '',
  inActiveBtnColor: '',
  activeBtnBgColor: '',
  activeBtnColor: '',
  labelSize: '12px',
  btnHeight: '32px',
  btnPadding: '10px 20px 11px',
  btnMargin: '4px 4px',
  showLabel: true,
  btnWidth: '100%',
  btnMinWidth: '',
  borderRadius: '',
  name: '',
  disableElevation: false,
  disabled: false,
  disabledBgColor: '',
  disabledBorder: '',
  disabledColor: '',
};

export default ButtonToggle;
