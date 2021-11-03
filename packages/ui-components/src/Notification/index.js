import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const NotificationPopup = React.forwardRef((props, ref) => {
  const { open, handleClose, autoHideDuration, message, variant, vertical, horizontal } = props;
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical, horizontal }}
      onClose={handleClose}
      ref={ref}>
      <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
});

NotificationPopup.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  autoHideDuration: PropTypes.number,
  message: PropTypes.string,
  variant: PropTypes.string,
  vertical: PropTypes.oneOfType(['top', 'bottom', 'center', 'right', 'left']),
  horizontal: PropTypes.oneOfType(['top', 'bottom', 'center', 'right', 'left']),
};

NotificationPopup.defaultProps = {
  open: false,
  handleClose: () => {},
  autoHideDuration: 6000,
  message: '',
  variant: 'success',
  vertical: 'top',
  horizontal: 'right',
};

export default NotificationPopup;
