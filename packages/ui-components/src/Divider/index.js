import React from 'react';
import PropTypes from 'prop-types';
import { Divider as MUIDivider } from '@material-ui/core';
import useStyles from './index.styles';
import dividerTheme from '../Themes/divider.theme';

function Divider(props) {
  const { orientation, flexItem, style, useDefault, themeType, theme } = props;
  const themeContainer = useDefault ? dividerTheme(theme)[themeType] : props;
  const classes = useStyles(themeContainer);
  return (
    <MUIDivider
      className={classes.divider}
      orientation={orientation}
      flexItem={flexItem}
      style={style}
    />
  );
}

Divider.propTypes = {
  orientation: PropTypes.string,
  flexItem: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  useDefault: PropTypes.bool,
  themeType: PropTypes.string,
  theme: PropTypes.string,
};

Divider.defaultProps = {
  orientation: 'horizontal',
  flexItem: false,
  style: {},
  useDefault: false,
  themeType: 'primary',
  theme: 'dark',
};

export default Divider;
