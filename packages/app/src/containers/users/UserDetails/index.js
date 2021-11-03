import React, { useEffect, useCallback, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import ControlledInput from 'components/ControlledInput';
import { emailRegEx } from 'utils/api/regularExpressions';
import { useForm } from 'react-hook-form';
import { SSButton, SSTypography } from '@ss/ui-components';
import { buttonTheme } from 'themes/button.theme';
import { typographyTheme } from 'themes/typography.theme';
import ClientServices from 'utils/services/ClientService';
import UserServices from 'utils/services/UsersServices';
import moment from 'moment';

const inputTheme = {
  width: '570px',
};

function UserDetails(props) {
  const { userInfo, userDispatch, handleClose } = props;
  const [creationInfo, setCreationInfo] = useState({
    createdBy: '',
    createdAt: '',
    updatedBy: '',
    updatedAt: '',
  });
  const { setValue, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { forgetPassword } = ClientServices;
    forgetPassword(data.userEmail, userDispatch, handleClose);
  };

  const fetchUserInfo = useCallback(async () => {
    if (Object.keys(userInfo).length) {
      const createdInfoCopy = { ...creationInfo };
      const { getUserDetails } = UserServices;
      const { createdBy, updatedBy, createdAt, updatedAt } = userInfo;
      const createdByInfo = await getUserDetails(createdBy, userDispatch);
      const updatedByInfo = await getUserDetails(updatedBy, userDispatch);
      createdInfoCopy.createdBy = `${createdByInfo.firstName} ${createdByInfo.lastName}`;
      createdInfoCopy.createdAt = createdAt;
      createdInfoCopy.updatedBy = `${updatedByInfo.firstName} ${updatedByInfo.lastName}`;
      createdInfoCopy.updatedAt = updatedAt;
      setCreationInfo(createdInfoCopy);
    }
  }, [userDispatch, userInfo]);

  useEffect(() => {
    if (Object.keys(userInfo).length) {
      setValue('userEmail', userInfo.email);
      fetchUserInfo();
    }
  }, [userInfo, setValue, fetchUserInfo]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '60px 0' }}>
        <Grid container>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Grid container direction="column">
              <SSTypography label={'Added by:'} {...typographyTheme('dark', 'book').secondary} />
              <SSTypography
                label={creationInfo.createdBy}
                {...typographyTheme('dark', 'book').secondary}
              />
            </Grid>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Grid container direction="column">
              <SSTypography label={'Added on:'} {...typographyTheme('dark', 'book').secondary} />
              <SSTypography
                label={`${moment(creationInfo.createdAt).format('DD/MMM/YY')}`}
                {...typographyTheme('dark', 'book').secondary}
              />
            </Grid>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Grid container direction="column">
              <SSTypography
                label={'Modified by: '}
                {...typographyTheme('dark', 'book').secondary}
              />
              <SSTypography
                label={creationInfo.updatedBy}
                {...typographyTheme('dark', 'book').secondary}
              />
            </Grid>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Grid container direction="column">
              <SSTypography label={'Modified on'} {...typographyTheme('dark', 'book').secondary} />
              <SSTypography
                label={`${moment(creationInfo.updatedAt).format('DD/MMM/YY')}`}
                {...typographyTheme('dark', 'book').secondary}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item>
              <ControlledInput
                name="userEmail"
                label="* User Email ID"
                rules={{ required: true, pattern: emailRegEx }}
                setValue={setValue}
                control={control}
                theme={inputTheme}
                errorMessage="User Email is is required field"
                messageLabel="User Email"
              />
            </Grid>
            <Grid item>
              <SSButton type="submit" {...buttonTheme('dark').primary} margin="25px 0 0">
                Reset Password
              </SSButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

UserDetails.propTypes = {};

UserDetails.defaultProps = {};

export default UserDetails;
