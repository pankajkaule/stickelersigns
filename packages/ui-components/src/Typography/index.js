import React from 'react';
import PropTypes from 'prop-types';
import { Typography as MUITypography } from '@material-ui/core';
import useStyles from './index.styles';
import typographyTheme from '../Themes/typography.theme';

function Typography(props) {
  const { label, onClick, overflowEllipsis, styles, useDefault, variant, theme, font, error } =
    props;
  const themeContainer = useDefault ? typographyTheme(theme, font, error)[variant] : props;
  const classes = useStyles(themeContainer);
  const style = overflowEllipsis
    ? { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
    : {};

  return (
    <MUITypography className={classes.root} onClick={onClick} style={{ ...style, ...styles }}>
      {label}
    </MUITypography>
  );
}

Typography.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  styles: PropTypes.objectOf(PropTypes.string),
  overflowEllipsis: PropTypes.bool,
  useDefault: PropTypes.bool,
  variant: PropTypes.string,
  theme: PropTypes.string,
  font: PropTypes.string,
  error: PropTypes.bool,
};

Typography.defaultProps = {
  onClick: () => {},
  styles: {},
  overflowEllipsis: true,
  useDefault: false,
  variant: 'primary',
  theme: 'dark',
  font: 'regular',
  error: false,
};

export default Typography;
