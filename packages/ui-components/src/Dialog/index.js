import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as MUIDialog, DialogContent } from '@material-ui/core';
import useStyles from './index.styles';
import dialogTheme from '../Themes/dialog.theme';

function Dialog(props) {
  const { open, handleClose, children, styles, useDefault, theme, variant } = props;
  const themeContainer = useDefault ? dialogTheme(theme)[variant] : styles;
  const classes = useStyles(themeContainer);
  return (
    <MUIDialog
      open={open}
      onClose={handleClose}
      classes={{ root: classes.root, paper: classes.paper }}>
      <DialogContent>{children}</DialogContent>
    </MUIDialog>
  );
}

Dialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.element,
  styles: PropTypes.shape({
    background: '',
    width: '',
    height: '',
    borderRadius: '',
    borderColor: '',
    color: '',
    padding: '',
    maxWidth: '',
  }),
  useDefault: PropTypes.bool,
  theme: PropTypes.string,
  variant: PropTypes.string,
};

Dialog.defaultProps = {
  open: false,
  handleClose: () => {},
  children: '',
  styles: {},
  useDefault: false,
  theme: 'dark',
  variant: 'primary',
};

export default Dialog;
