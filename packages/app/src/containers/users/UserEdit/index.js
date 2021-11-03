import React, { useCallback, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { SSButton, SSDivider } from '@ss/ui-components';
import { buttonTheme } from 'themes/button.theme';
import { dividerTheme } from 'themes/divider.theme';
import UserForm from 'components/form/User';
import { convertIntoBase64Image, getRolesFromRoleValue } from 'utils/helpers/dataConverters';
import UserServices from 'utils/services/UsersServices';

function UserEdit(props) {
  const { userInfo, userDispatch, allRoles, selectedBusiness, handleClose, id } = props;
  const [filesContainer, setFilesContainer] = useState({});

  const {
    control,
    setValue,
    formState: { errors, isDirty },
    clearErrors,
    watch,
    handleSubmit,
    register,
  } = useForm();

  register('userProfilePic');

  useEffect(() => {
    if (Object.keys(userInfo).length) {
      setValue('userName', userInfo.userName);
      setValue('userFName', userInfo.firstName);
      setValue('userLName', userInfo.lastName);
      setValue('userEmail', userInfo.email);
      setValue('userRole', userInfo.roles[0].name);
      setValue('userProfilePic', convertIntoBase64Image(userInfo.photo));
    }
  }, [userInfo, setValue]);

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
    updateUsers(formData, userDispatch, handleClose);
  };

  const handleDeactivateUser = () => {
    const { deactivateUser } = UserServices;
    deactivateUser(id, userDispatch, handleClose);
  };

  const handleDeleteUser = () => {
    const { deleteUser } = UserServices;
    deleteUser(id, userDispatch, handleClose);
  };

  const handleActivateUser = () => {
    const { reactivateUser } = UserServices;
    reactivateUser(id, userDispatch, handleClose);
  };

  const isActive = userInfo.active || false;
  const userActiveInActiveTitle = isActive ? 'Deactivate User' : 'Activate User';

  return (
    <Grid container>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '40px 0 0 0' }}>
          <UserForm
            control={control}
            setValue={setValue}
            errors={errors}
            clearErrors={clearErrors}
            watch={watch}
            handleFile={handleFile}
            userDispatch={userDispatch}
            roles={allRoles}
          />
        </Grid>
        <SSDivider style={dividerTheme('dark').primary} />
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Grid container>
                <Grid item>
                  <SSButton disabled={!isDirty} type="submit" {...buttonTheme('dark').secondary}>
                    Update User Info
                  </SSButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <SSButton
                    onClick={isActive ? handleDeactivateUser : handleActivateUser}
                    {...buttonTheme('dark').secondary}>
                    {userActiveInActiveTitle}
                  </SSButton>
                </Grid>
                <Grid item>
                  <SSButton onClick={handleDeleteUser} {...buttonTheme('dark').secondary}>
                    Delete User
                  </SSButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default React.memo(UserEdit);
