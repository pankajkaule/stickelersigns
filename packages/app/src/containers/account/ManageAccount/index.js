import React, { useCallback, useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import CloseIcon from '@material-ui/icons/Close';
import { SSButton, SSDivider, SSDrawer, SSTypography } from '@ss/ui-components';
import { buttonTheme } from 'themes/button.theme';
import { dividerTheme } from 'themes/divider.theme';
import UserForm from 'components/form/User';
import { convertIntoBase64Image, getRolesFromRoleValue } from 'utils/helpers/dataConverters';
import UserServices from 'utils/services/UsersServices';
import drawerTheme from 'themes/drawer.theme';
import useStyles from './index.styles';
import { useHistory } from 'react-router';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import { UserContext } from 'context/user';
import * as actions from 'utils/actionTypes';
import userStore from 'utils/stores/userStore';

function ManageAccount(props) {
  const { userState, userDispatch } = useContext(UserContext);
  const { allRoles, selectedBusiness, userName, firstName, lastName, photo, email, roles, id } =
    userState;
  const [filesContainer, setFilesContainer] = useState({});
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const { location, goBack } = history;
  const { drawerTop } = useDrawerAutoScroll({ id: 'manage-account-drawer' });

  const {
    control,
    setValue,
    formState: { errors },
    clearErrors,
    watch,
    handleSubmit,
    register,
  } = useForm();

  const classes = useStyles();

  register('userProfilePic');

  useEffect(() => {
    setValue('userName', userName);
    setValue('userFName', firstName);
    setValue('userLName', lastName);
    setValue('userEmail', email);
    setValue('userRole', roles.length ? roles[0].name : '');
    setValue('userProfilePic', convertIntoBase64Image(photo));
  }, [setValue, userName, firstName, lastName, email, roles, photo]);

  const handleFile = useCallback(
    (file, sourceName) => {
      const filesContainerCopy = { ...filesContainer };
      filesContainerCopy[sourceName] = file;
      setFilesContainer(filesContainerCopy);
    },
    [filesContainer],
  );

  const onSubmit = (data) => {
    const { updateUsers } = UserServices;
    const postBody = {
      id,
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
    updateUsers(formData, userDispatch, goBack);
  };

  // const handleDeactivateUser = () => {
  //   const { deactivateUser } = UserServices;
  //   deactivateUser(id, userDispatch, goBack);
  // };

  const handleLogout = () => {
    localStorage.clear();
    userDispatch({ type: actions.STORE_USER_DATA, payload: userStore });
    history.push('/login');
  };

  const handleDeleteUser = () => {
    const { deleteUser } = UserServices;
    deleteUser(id, userDispatch, handleLogout);
  };

  const handleEditAccount = () => {
    setDisabled(false);
  };

  const handleCancel = () => {
    setDisabled(true);
  };

  // const handleActivateUser = () => {
  //   const { reactivateUser } = UserServices;
  //   reactivateUser(id, userDispatch, goBack);
  // };

  // const isActive = active || false;
  // const userActiveInActiveTitle = isActive ? 'Deactivate User' : 'Activate User';

  const actionPanel = disabled ? (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid container>
            <Grid item>
              <SSButton
                onClick={handleEditAccount}
                type={'button'}
                {...buttonTheme('dark').secondary}>
                Edit Account
              </SSButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            {/* <Grid item>
          <SSButton
            onClick={isActive ? handleDeactivateUser : handleActivateUser}
            {...buttonTheme('dark').secondary}>
            {userActiveInActiveTitle}
          </SSButton>
        </Grid> */}
            <Grid item>
              <SSButton onClick={handleDeleteUser} {...buttonTheme('dark').secondary}>
                Delete Account
              </SSButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <SSButton onClick={handleCancel} type={'button'} {...buttonTheme('dark').secondary}>
                Cancel
              </SSButton>
            </Grid>
            <Grid item>
              <SSButton type="submit" {...buttonTheme('dark').secondary}>
                Update
              </SSButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <SSDrawer
      anchor="bottom"
      open={location.pathname === '/account/manageAccount'}
      onClose={() => goBack()}
      id={'manage-account-drawer'}
      top={drawerTop}
      {...drawerTheme('dark').drawer}>
      <Grid container style={{ padding: '40px' }} justifyContent="center">
        <Grid item className={classes.container}>
          <Grid container>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <SSTypography
                      label={disabled ? 'MANAGE ACCOUNT' : 'EDIT ACCOUNT'}
                      useDefault
                      variant="drawerTitle"
                    />
                  </Grid>
                  <Grid item>
                    <SSButton
                      onClick={goBack}
                      {...buttonTheme('dark').close}
                      width="40px"
                      minWidth="40px"
                      height="40px">
                      <CloseIcon style={{ fontSize: '12px' }} />
                    </SSButton>
                  </Grid>
                </Grid>
              </Grid>
              <SSDivider style={dividerTheme('dark').primary} />
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <UserForm
                  control={control}
                  setValue={setValue}
                  errors={errors}
                  clearErrors={clearErrors}
                  watch={watch}
                  handleFile={handleFile}
                  userDispatch={userDispatch}
                  roles={allRoles}
                  disabled={disabled}
                  hideRole={true}
                />
              </Grid>
              <SSDivider style={dividerTheme('dark').primary} />
              {actionPanel}
            </form>
          </Grid>
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

export default React.memo(ManageAccount);
