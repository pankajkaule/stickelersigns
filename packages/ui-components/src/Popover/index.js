import React from 'react';
import PropTypes from 'prop-types';
import { Popover as MUIPopover } from '@material-ui/core';
import useStyles from './index.styles';
import popoverTheme from '../Themes/popover.theme';

function Popover(props) {
  const {
    id,
    open,
    anchorEl,
    handleClose,
    anchorOrigin,
    transformOrigin,
    theme,
    themeType,
    children,
  } = props;
  const classes = useStyles(popoverTheme(theme)[themeType]);
  return (
    <MUIPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      classes={{ paper: classes.root }}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}>
      {children}
    </MUIPopover>
  );
}

Popover.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.string.isRequired,
    horizontal: PropTypes.string.isRequired,
  }),
  transformOrigin: PropTypes.shape({
    vertical: PropTypes.string.isRequired,
    horizontal: PropTypes.string.isRequired,
  }),
  theme: PropTypes.string,
  themeType: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Popover.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  theme: 'dark',
  themeType: 'primary',
};

export default Popover;
