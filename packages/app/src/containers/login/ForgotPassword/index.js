import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSDrawer, SSButton, SSDivider, SSTypography } from '@ss/ui-components';
import { useForm } from 'react-hook-form';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './index.styles';
import drawerTheme from 'themes/drawer.theme';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import { buttonTheme } from 'themes/button.theme';
import ClientServices from 'utils/services/ClientService';
import { typographyTheme } from 'themes/typography.theme';
import { dividerTheme } from 'themes/divider.theme';
import ControlledInput from 'components/ControlledInput';

function ForgotPassword(props) {
  const { open, setLoader, userDispatch, handleClose, theme = 'dark' } = props;
  const { drawerTop } = useDrawerAutoScroll({ id: 'forget-password', defaultTop: 310 });
  const { handleSubmit, control } = useForm();
  const classes = useStyles();

  const handleFormData = async (data) => {
    const { forgetPassword } = ClientServices;
    await forgetPassword(data.email, setLoader, userDispatch, handleClose);
  };
  return (
    <SSDrawer
      anchor="bottom"
      open={open}
      onClose={handleClose}
      id={'forget-password'}
      top={drawerTop}
      {...drawerTheme(theme).drawer}>
      <Grid container justify="center" style={{ padding: '40px', margin: '0 12.5%' }}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '0 0 40px0' }}>
          <form onSubmit={handleSubmit(handleFormData)}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <SSTypography label="Forgot password" {...typographyTheme('dark').drawerTitle} />
              </Grid>
              <Grid item>
                <SSButton
                  onClick={handleClose}
                  {...buttonTheme('dark').close}
                  width="40px"
                  minWidth="40px"
                  height="40px">
                  <CloseIcon style={{ fontSize: '12px' }} />
                </SSButton>
              </Grid>
            </Grid>

            <SSDivider {...dividerTheme('dark').primary} />

            <Grid>
              <Grid item className={classes.marginTop}>
                <ControlledInput
                  name="email"
                  label="* Enter Registered Email"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  errorMessage={'User Email is required'}
                  theme={{ width: '570px' }}
                />
              </Grid>
              <Grid>
                <SSDivider {...dividerTheme('dark').primary} margin="140px 0 40px " />
              </Grid>
              <Grid container spacing={2}>
                <Grid item>
                  <SSButton onClick={() => props.closeDrawer()} {...buttonTheme('dark').secondary}>
                    Cancel
                  </SSButton>
                </Grid>
                <Grid item>
                  <SSButton type="submit" {...buttonTheme('dark').primary}>
                    Request Reset Link
                  </SSButton>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

ForgotPassword.propTypes = {
  theme: PropTypes.string,
  open: PropTypes.bool.isRequired,
  setLoader: PropTypes.func,
  userDispatch: PropTypes.func,
  handleClose: PropTypes.func.isRequired,
};

ForgotPassword.defaultProps = {
  theme: 'dark',
  setLoader: () => {},
  userDispatch: () => {},
};

export default ForgotPassword;
