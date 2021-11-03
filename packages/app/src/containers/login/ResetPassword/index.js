import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSDrawer, SSButton, SSDivider, SSTypography } from '@ss/ui-components';
import { useForm } from 'react-hook-form';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './index.styles';
import drawerTheme from 'themes/drawer.theme';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import { buttonTheme } from 'themes/button.theme';
import { typographyTheme } from 'themes/typography.theme';
import { dividerTheme } from 'themes/divider.theme';
import ControlledInput from 'components/ControlledInput';
import { useHistory, useParams } from 'react-router';
import { UserContext } from 'context/user';
import UserServices from 'utils/services/UsersServices';

function ResetPassword(props) {
  const { theme = 'dark', isNewUser = true } = props;
  const { userDispatch } = useContext(UserContext);
  let { id } = useParams();
  const history = useHistory();
  const { drawerTop } = useDrawerAutoScroll({ id: 'forget-password', defaultTop: 310 });
  const { handleSubmit, control, setError } = useForm();
  const classes = useStyles();

  const handleClose = () => history.push('/');

  const viewType = useMemo(() => {
    return history.location.pathname.includes('/user/user/reset-password')
      ? { title: 'RESET PASSWORD', primaryBtnLabel: 'Update', isReset: true }
      : { title: 'ACTIVATE USER', primaryBtnLabel: 'Activate', isReset: false };
  }, [history.location.pathname]);
  console.log(viewType);
  const handleFormData = async (data) => {
    if (data.newPassword === data.confirmNewPassword) {
      const { resetUserPassword, activateUser } = UserServices;
      if (viewType.isReset) {
        const postBody = {
          token: id,
          newPassword: data.newPassword,
          confirmPassword: data.confirmNewPassword,
        };
        await resetUserPassword({ postBody, dispatch: userDispatch, handleClose });
      } else {
        const postBody = {
          token: id,
          password: data.newPassword,
        };
        await activateUser({ postBody, dispatch: userDispatch, handleClose });
      }
    } else {
      setError('confirmNewPassword', {
        type: 'password-not-matched',
        message: 'Password does not matched with confirm password',
      });
    }
  };

  return (
    <SSDrawer
      anchor="bottom"
      open={
        history.location.pathname.includes('/user/user/activate-user') ||
        history.location.pathname.includes('/user/user/reset-password')
      }
      onClose={handleClose}
      id={'forget-password'}
      top={drawerTop}
      {...drawerTheme(theme).drawer}>
      <Grid container justify="center" style={{ padding: '40px', margin: '0 12.5%' }}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '0 0 40px0' }}>
          <form onSubmit={handleSubmit(handleFormData)}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <SSTypography label={viewType.title} {...typographyTheme('dark').drawerTitle} />
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

            {/* {isNewUser ? (
              ''
            ) : (
              <Grid item className={classes.marginTop}>
                <ControlledInput
                  type="password"
                  name="currentPassword"
                  label="* Current Password"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  errorMessage={'Current Password is required'}
                  theme={{ width: '570px' }}
                />
              </Grid>
            )} */}
            <Grid item className={classes.marginTop}>
              <ControlledInput
                type="password"
                name="newPassword"
                label={isNewUser ? '* Password' : '* New Password'}
                control={control}
                defaultValue=""
                rules={{ required: true }}
                errorMessage={`${isNewUser ? 'Password' : 'New Password'} is required`}
                theme={{ width: '570px' }}
              />
            </Grid>
            <Grid item className={classes.marginTop}>
              <ControlledInput
                type="password"
                name="confirmNewPassword"
                label={isNewUser ? '* Confirm Password' : '* Confirm New Password'}
                control={control}
                defaultValue=""
                rules={{ required: true }}
                errorMessage={`${
                  isNewUser ? 'Confirm Password' : 'Confirm New Password'
                } is required`}
                theme={{ width: '570px' }}
              />
            </Grid>
            <Grid>
              <SSDivider {...dividerTheme('dark').primary} margin="140px 0 40px " />
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <SSButton onClick={handleClose} {...buttonTheme('dark').secondary}>
                  Cancel
                </SSButton>
              </Grid>
              <Grid item>
                <SSButton type="submit" {...buttonTheme('dark').primary}>
                  {viewType.primaryBtnLabel}
                </SSButton>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

ResetPassword.propTypes = {
  theme: PropTypes.string,
  open: PropTypes.bool.isRequired,
  setLoader: PropTypes.func,
  userDispatch: PropTypes.func,
  handleClose: PropTypes.func.isRequired,
};

ResetPassword.defaultProps = {
  theme: 'dark',
  setLoader: () => {},
  userDispatch: () => {},
};

export default ResetPassword;
