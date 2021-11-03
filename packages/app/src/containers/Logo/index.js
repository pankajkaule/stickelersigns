import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import useStyles from './index.styles';

function LogoContainer(props) {
  const { children, justify } = props;
  const classes = useStyles(props);
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Grid container justify={justify}>
        <Grid item className={classes.root}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}

LogoContainer.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  minHeight: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  justify: PropTypes.string,
};

LogoContainer.defaultProps = {
  justify: 'center',
};

export default LogoContainer;
