import React from 'react';
import { Grid } from '@material-ui/core';
import { SSButton, SSCheckbox, SSTypography } from '@ss/ui-components';
import useStyles from './index.styles';
import { useForm } from 'react-hook-form';
import { buttonTheme } from 'themes/button.theme';
import checkboxTheme from 'themes/checkbox.theme';
import nonAuthService from 'utils/services/nonAuth';
import { setAuthToken } from 'utils/helpers/localstorage';
import { useHistory } from 'react-router';
import ForgotPassword from 'containers/login/ForgotPassword';
import { UserContext } from 'context/user';
import ControlledInput from 'components/ControlledInput';
import { typographyTheme } from 'themes/typography.theme';
import { responseErrorValidator } from 'utils/helpers/other';
import * as actions from 'utils/actionTypes';

function LoginView() {
  const { userDispatch } = React.useContext(UserContext);
  const classes = useStyles();
  const { handleSubmit, control, setError } = useForm();
  const history = useHistory();

  const handleFormData = async (data) => {
    try {
      userDispatch({ type: actions.GLOBAL_SHOW_LOADER });
      const result = await nonAuthService.post(`login`, { ...data });
      if (result.status === 200 && result.data.isSuccess && result.data.isSuccess === 'TRUE') {
        userDispatch({ type: actions.GLOBAL_HIDE_LOADER });
        setAuthToken(result.data.token);
        history.push('/');
      } else {
        userDispatch({ type: actions.GLOBAL_HIDE_LOADER });
        setError('username', { message: result.data.message, type: 'invalid_credentials' });
        setError('password', { message: result.data.message, type: 'invalid_credentials' });
      }
    } catch (err) {
      userDispatch({ type: actions.GLOBAL_HIDE_LOADER });
      setError('username', { message: responseErrorValidator(err), type: 'invalid_credentials' });
      setError('password', { message: responseErrorValidator(err), type: 'invalid_credentials' });
    }
  };

  const [rememberMe, setRememberMe] = React.useState(false);
  const [forgotPasswordPopup, setForgotPasswordPopup] = React.useState(false);
  const handleChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const closeDrawer = () => {
    setForgotPasswordPopup(false);
  };

  return (
    <Grid>
      <Grid container justifyContent="center" alignItems="center" className={classes.root}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justifyContent="center" alignItems="flex-start">
            <Grid item className={classes.xliv} xs={12} sm={12} md={12} lg={12}>
              <Grid container justifyContent="center">
                XLIV
              </Grid>
            </Grid>
            <Grid item="center" xs={12} sm={12} md={12} lg={12}>
              <Grid container justifyContent="center" className={classes.subheading}>
                content management software
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <form onSubmit={handleSubmit(handleFormData)}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  wrap="wrap">
                  <Grid item className={classes.marginTop}>
                    <ControlledInput
                      name="username"
                      label="* User ID / Email"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      errorMessage={'User Id / Email is required field'}
                      theme={{ width: '570px' }}
                    />
                  </Grid>
                  <Grid item className={classes.marginTop}>
                    <ControlledInput
                      name="password"
                      type="password"
                      label="* Password"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      errorMessage={'Password is required field'}
                      theme={{ width: '570px' }}
                    />
                  </Grid>
                  <Grid item>
                    <Grid container justifyContent="space-between" className={classes.submit}>
                      <Grid>
                        <SSButton type="submit" {...buttonTheme('dark').primary}>
                          LOGIN
                        </SSButton>
                      </Grid>

                      <Grid item className={classes.checkbox1}>
                        <Grid container alignItems="center">
                          <SSCheckbox
                            {...checkboxTheme('dark').primary}
                            value={rememberMe}
                            onChange={handleChange}
                          />
                          <SSTypography
                            label="Remember me"
                            {...typographyTheme('dark', 'regular').link}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid className={classes.forgotPassword}>
                    <SSButton
                      onClick={() => setForgotPasswordPopup(true)}
                      color="primary"
                      className={classes.forgot}
                      {...buttonTheme('dark').secondary}>
                      Ohh! I forgot my password
                    </SSButton>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ForgotPassword
        open={forgotPasswordPopup}
        closeDrawer={closeDrawer}
        userDispatch={userDispatch}
        handleClose={closeDrawer}
      />
    </Grid>
  );
}

LoginView.propTypes = {};

LoginView.defaultProps = {};

export default LoginView;
