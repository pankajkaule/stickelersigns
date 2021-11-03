import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@material-ui/core';
import useStyles from './index.styles';
import Button from '../Button';

function ConfirmationDialog(props) {
  const {
    open,
    handleClose,
    buttonSecondaryTheme,
    buttonPrimaryTheme,
    handleSave,
    secondaryBtnLabel,
    primaryBtnLabel,
    title,
    content,
    handleCancel,
  } = props;
  const classes = useStyles(props);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{ root: classes.root, paper: classes.paper }}>
      <DialogTitle classes={{ root: classes.header }}>{title}</DialogTitle>
      <DialogContent classes={{ root: classes.content }}>{content}</DialogContent>
      <DialogActions classes={{ root: classes.actions }}>
        <Grid container justify="flex-end" spacing={2}>
          <Grid item>
            <Button {...buttonSecondaryTheme} onClick={handleCancel}>
              {secondaryBtnLabel}
            </Button>
          </Grid>
          <Grid item>
            <Button {...buttonPrimaryTheme} onClick={handleSave}>
              {primaryBtnLabel}
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  buttonSecondaryTheme: PropTypes.objectOf(PropTypes.string),
  buttonPrimaryTheme: PropTypes.objectOf(PropTypes.string),
  handleSave: PropTypes.func,
  secondaryBtnLabel: PropTypes.string,
  primaryBtnLabel: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  handleCancel: PropTypes.func,
};

ConfirmationDialog.defaultProps = {
  open: false,
  handleClose: () => {},
  buttonSecondaryTheme: {
    backgroundColor: 'transparent',
    border: '1px solid #2E3036',
    color: '#8C8C8C',
    disabledBgColor: '#666',
    disabledBorder: '1px solid #ccc',
    disabledColor: '#ccc',
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    height: '40px',
    lineHeight: '19px',
    onFocusBgColor: 'linear-gradient(135deg, #75CFFF 0%, #5735FD 100%)',
    onFocusBorder: '1px solid transparent',
    onFocusColor: '#FFFFFF',
    onHoverBgColor: '#2E3036',
    onHoverBorder: '1px solid #2E3036',
    onHoverColor: '#FFFFFF',
    padding: '10px 20px 11px',
    variant: 'contained',
  },
  buttonPrimaryTheme: {
    backgroundColor: 'transparent',
    border: '1px solid #83D4FF',
    borderRadius: '5px',
    color: '#83D4FF',
    disabledBgColor: '#666',
    disabledBorder: '2px solid #ccc',
    disabledColor: '#ccc',
    fontFamily: 'Typold Medium',
    fontSize: '14px',
    height: '40px',
    lineHeight: '19px',
    onFocusBgColor: 'linear-gradient(135deg, #75CFFF 0%, #5735FD 100%)',
    onFocusBorder: '1px solid transparent',
    onFocusColor: '#FFFFFF',
    onHoverBgColor: 'transparent',
    onHoverBorder: '1px solid #83D4FF',
    onHoverColor: '#83D4FF',
    padding: '14px 23px 16px',
    variant: 'contained',
  },
  handleSave: () => {},
  secondaryBtnLabel: 'Undo Changes',
  primaryBtnLabel: 'Save Changes',
  title: 'Save Changes?',
  content: 'You have made some changes to configurations.',
  handleCancel: () => {},
};

export default ConfirmationDialog;
