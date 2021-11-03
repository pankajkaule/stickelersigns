import React, { useCallback, useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { SSButton, SSDivider, SSDrawer, SSTypography } from '@ss/ui-components';
import { buttonTheme } from 'themes/button.theme';
import { dividerTheme } from 'themes/divider.theme';
import { typographyTheme } from 'themes/typography.theme';
import drawerTheme from 'themes/drawer.theme';
import { useLocation } from 'react-router';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import useStyles from './index.styles';
import UserForm from 'components/form/User';
import { getRolesFromRoleValue } from 'utils/helpers/dataConverters';
import { UserContext } from 'context/user';
import UserServices from 'utils/services/UsersServices';

function CompanyEdit(props) {
  const { handleClose, selectedBusiness } = props;
  const { userState, userDispatch } = useContext(UserContext);
  const { allRoles } = userState;
  const [filesContainer, setFilesContainer] = useState({});

  const {
    control,
    setValue,
    formState: { errors },
    clearErrors,
    watch,
    handleSubmit,
    register,
    reset,
  } = useForm();
  const location = useLocation();
  const { drawerTop } = useDrawerAutoScroll({ id: 'user-add' });
  const classes = useStyles();

  register('userProfilePic');

  const handleFile = useCallback(
    (file, sourceName) => {
      const filesContainerCopy = { ...filesContainer };
      filesContainerCopy[sourceName] = file;
      setFilesContainer(filesContainerCopy);
    },
    [filesContainer],
  );

  const handlePopupClose = () => {
    reset();
    handleClose();
  };

  const onSubmit = (data) => {
    const { createUsers } = UserServices;
    const postBody = {
      userName: data.userName,
      firstName: data.userFName,
      lastName: data.userLName,
      email: data.userEmail,
      clientId: selectedBusiness,
      roles: getRolesFromRoleValue(allRoles, data.userRole),
    };
    let userProfilePic = filesContainer.hasOwnProperty('userProfilePic')
      ? filesContainer.userProfilePic
      : null;
    const formData = new FormData();
    formData.append('content', JSON.stringify(postBody));
    formData.append('file', userProfilePic);
    createUsers(formData, userDispatch, handlePopupClose);
  };

  return (
    <SSDrawer
      anchor="bottom"
      open={location.pathname === '/users/add'}
      onClose={handlePopupClose}
      id={'user-add'}
      top={drawerTop}
      {...drawerTheme('dark').drawer}>
      <Grid container style={{ padding: '40px' }} justifyContent="center">
        <Grid item className={classes.container}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <SSTypography label="Add New User" {...typographyTheme('dark').drawerTitle} />
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <SSButton onClick={handlePopupClose} {...buttonTheme('dark').secondary}>
                        Cancel
                      </SSButton>
                    </Grid>
                    <Grid item>
                      <SSButton type="submit" {...buttonTheme('dark').primary}>
                        Add User
                      </SSButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <SSDivider style={dividerTheme('dark').primary} />
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '40px 0 0 0' }}>
              <UserForm
                control={control}
                setValue={setValue}
                watch={watch}
                clearErrors={clearErrors}
                errors={errors}
                handleFile={handleFile}
                userDispatch={userDispatch}
                roles={allRoles}
              />
            </Grid>
            <SSDivider style={dividerTheme('dark').primary} />
          </form>
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

export default React.memo(CompanyEdit);
