import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import useStyles from './index.styles';
import listTheme from '../Themes/list.theme';

function List(props) {
  const { children, className, theme, variant, useDefault, style } = props;
  const themeContainer = useDefault ? listTheme(theme)[variant] : props;
  const classes = useStyles(themeContainer);
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      className={`${classes.root} ${className}`}
      style={style}>
      {children}
    </Grid>
  );
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  theme: PropTypes.string,
  useDefault: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
};

List.defaultProps = {
  className: '',
  theme: 'dark',
  variant: 'primary',
  useDefault: false,
  style: {},
};

export default List;
