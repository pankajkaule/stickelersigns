import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as MUIDrawer, LinearProgress, Grid } from '@material-ui/core';
import useStyles from './index.styles';

const Drawer = React.forwardRef((props, ref) => {
  const { anchor, open, onClose, children, id, className, loader } = props;
  const classes = useStyles(props);
  return (
    <MUIDrawer
      ref={ref}
      anchor={anchor}
      open={open}
      onClose={onClose}
      id={id}
      className={className}
      classes={{ paper: classes.paper, root: classes.root }}>
      {loader ? (
        <LinearProgress
          classes={{ root: classes.loader, colorPrimary: classes.colorPrimary, bar: classes.bar }}
        />
      ) : (
        ''
      )}
      <Grid container className={classes.contentContainer}>
        {children}
      </Grid>
    </MUIDrawer>
  );
});

Drawer.propTypes = {
  anchor: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  borderTop: PropTypes.string,
  padding: PropTypes.string,
  borderRight: PropTypes.string,
  borderLeft: PropTypes.string,
  borderBottom: PropTypes.string,
  top: PropTypes.string,
  backdropFilter: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  loader: PropTypes.bool,
};

Drawer.defaultProps = {
  anchor: 'bottom',
  open: false,
  onClose: () => {},
  height: '100%',
  maxHeight: '100%',
  background: '#1F1F35',
  color: '#fff',
  borderTop: '3px solid #3AB6FF',
  padding: '20px',
  borderRight: '0',
  borderLeft: '0',
  borderBottom: '0',
  loader: false,
};

export default Drawer;
