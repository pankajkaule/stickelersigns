import React from 'react';
import PropTypes from 'prop-types';
import { Button as MUIButton } from '@material-ui/core';
import useStyles from './index.styles';
import buttonTheme from '../Themes/button.theme';

const Button = React.forwardRef((props, ref) => {
  const {
    size,
    type,
    styles,
    onClick,
    children,
    className,
    onMouseOver,
    onMouseLeave,
    onFocus,
    onBlur,
    onTouchStart,
    onTouchEnd,
    disabled,
    id,
    theme,
    themeType,
    useDefault,
  } = props;
  const themeContainer = useDefault ? buttonTheme(theme)[themeType] : props;
  const classes = useStyles(themeContainer);
  return (
    <MUIButton
      id={id}
      size={size}
      className={`${classes.root} ${className}`}
      type={type}
      style={styles}
      onClick={onClick}
      ref={ref}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      disabled={disabled}>
      {children}
    </MUIButton>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  styles: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  theme: PropTypes.string,
  themeType: PropTypes.string,
  useDefault: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  styles: {},
  className: '',
  onMouseOver: () => {},
  onMouseLeave: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onTouchStart: () => {},
  onTouchEnd: () => {},
  disabled: false,
  id: '',
  theme: 'dark',
  themeType: 'primary',
  useDefault: false,
};

export default Button;
