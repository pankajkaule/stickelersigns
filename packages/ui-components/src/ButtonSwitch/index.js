import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/index';

function ButtonSwitch(props) {
  const { handleClick, activeLabel, inActiveLabel, value, defaultValue } = props;

  const onClick = () => {
    handleClick(!value);
  };

  const activeStyle = {
    backgroundColor: props.activeBgColor,
    border: `1px solid ${props.activeBgColor}`,
    color: props.activeColor,
    fontFamily: 'Typold Bold',
    fontSize: '12px',
    height: '30px',
    lineHeight: '16px',
    onHoverBgColor: props.activeHoverBgColor,
    onHoverBorder: `1px solid ${props.activeHoverBgColor}`,
    onHoverColor: props.activeHoverColor,
    padding: '7px 15px',
    disabledColor: props.activeColor,
    disabledBgColor: props.activeBgColor,
    disabledBorder: `1px solid ${props.activeHoverBgColor}`,
  };

  const inActiveStyle = {
    backgroundColor: props.inActiveBgColor,
    border: `1px solid ${props.inActiveBgColor}`,
    color: props.inActiveColor,
    fontFamily: 'Typold Bold',
    fontSize: '12px',
    height: '30px',
    lineHeight: '16px',
    onHoverBgColor: props.inActiveHoverBgColor,
    onHoverBorder: `1px solid ${props.inActiveHoverBgColor}`,
    onHoverColor: props.inActiveHoverColor,
    padding: '7px 15px',
    disabledColor: props.inActiveColor,
    disabledBgColor: props.inActiveBgColor,
    disabledBorder: `1px solid ${props.inActiveHoverBgColor}`,
  };

  const defaultStyle = {
    width: props.width,
    height: props.height,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    maxHeight: props.maxHeight,
    minHeight: props.minHeight,
  };

  const themeContent = value
    ? { ...activeStyle, ...defaultStyle }
    : { ...inActiveStyle, ...defaultStyle };

  return (
    <Button onClick={onClick} variant="contained" {...themeContent} disabled>
      {value ? activeLabel : inActiveLabel}
    </Button>
  );
}

ButtonSwitch.propTypes = {
  activeLabel: PropTypes.string,
  inActiveLabel: PropTypes.string,
  handleClick: PropTypes.func,
  defaultValue: PropTypes.bool,
  value: PropTypes.bool,
  activeBgColor: PropTypes.string,
  activeColor: PropTypes.string,
  activeHoverColor: PropTypes.string,
  activeHoverBgColor: PropTypes.string,
  inActiveBgColor: PropTypes.string,
  inActiveColor: PropTypes.string,
  inActiveHoverColor: PropTypes.string,
  inActiveHoverBgColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
};
ButtonSwitch.defaultProps = {
  activeLabel: 'ON',
  inActiveLabel: 'OFF',
  handleClick: () => {},
  defaultValue: false,
  value: false,
  activeBgColor: '#549B70',
  activeColor: '#FFFFFF',
  activeHoverColor: '#FFFFFF',
  activeHoverBgColor: '#549B70',
  inActiveHoverBgColor: '#565555',
  inActiveColor: '#8E8E8E',
  inActiveHoverColor: '#8E8E8E',
};

export default ButtonSwitch;
