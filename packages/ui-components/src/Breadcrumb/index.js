import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs as MUIBreadCrumbs } from '@material-ui/core';
import useStyles from './index.styles';

function BreadCrumb(props) {
  const { children, separator } = props;
  const classes = useStyles(props);
  return (
    <MUIBreadCrumbs className={classes.root} separator={separator} classes={{ separator }}>
      {children}
    </MUIBreadCrumbs>
  );
}

BreadCrumb.propTypes = {
  children: PropTypes.node.isRequired,
  separator: PropTypes.string,
  size: PropTypes.any,
  color: PropTypes.any,
};

BreadCrumb.defaultProps = {
  separator: '>',
  size: 'md',
  color: 'primary',
};

export default BreadCrumb;
