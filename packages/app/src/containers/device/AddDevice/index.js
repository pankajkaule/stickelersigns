import React, { useCallback, useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { SSButton, SSDivider, SSDrawer, SSTypography } from '@ss/ui-components';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import { typographyTheme } from 'themes/typography.theme';
import { buttonTheme } from 'themes/button.theme';
import drawerTheme from 'themes/drawer.theme';
import useStyles from './index.styles';
import { useForm } from 'react-hook-form';
import { dividerTheme } from 'themes/divider.theme';
import DisplayForm from 'components/form/Display';
import { UserContext } from 'context/user';
import ControlledDropdown from 'components/ControlledDropdown';
import ClientServices from 'utils/services/ClientService';
import { convertIntoClientsDropDown } from 'utils/helpers/dataConverters';
import { getDeviceTabAccess } from 'utils/helpers/permissions';
import DeviceServices from 'utils/services/DeviceService';

function AddDevice(props) {
  const { theme = 'dark', handleRedirectBack } = props;
  const { userState, userDispatch } = useContext(UserContext);
  const { selectedBusiness, roles, business } = userState;

  const [clientsContainer, setClientsContainer] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const { drawerTop } = useDrawerAutoScroll({ id: 'add-device-drawer' });
  const { control, handleSubmit, clearErrors, reset, setValue, register, watch } = useForm({
    defaultValues: {
      orientationType: 'LANDSCAPE',
      client: selectedBusiness,
    },
  });

  useEffect(() => {
    if (selectedBusiness) {
      setValue('client', selectedBusiness);
    }
  }, [selectedBusiness, setValue]);

  watch('orientationType');

  register('orientationType');

  const fetchClientList = useCallback(async () => {
    const { getClientList } = ClientServices;
    const postBody = {
      searchCriterias: [],
      pageRequest: {
        page: 0,
        size: 1000,
      },
    };
    const result = await getClientList(postBody, userDispatch);
    setClientsContainer(convertIntoClientsDropDown(result.data, false));
  }, [userDispatch]);

  useEffect(() => {
    fetchClientList();
  }, [fetchClientList]);

  const onSubmit = (data) => {
    const { addDevice } = DeviceServices;
    let client = getDeviceTabAccess(roles) ? { clientId: data.client } : { clientId: business.id };
    let postBody = {
      ...client,
      deviceId: data.deviceId,
      deviceName: data.deviceName,
      platform: data.brand.title,
      platformAppVersion: data.os.title,
      orientationType: data.orientationType,
      status: 'OFF',
    };
    addDevice({ postBody, handleClose, dispatch: userDispatch });
  };

  const handleClose = () => {
    handleRedirectBack();
    clearErrors();
    reset();
  };

  const clientsContent = getDeviceTabAccess(roles) ? (
    <>
      <ControlledDropdown
        label="* Client"
        name="client"
        rules={{ required: true }}
        control={control}
        list={clientsContainer}
        errorMessage="Client is a required field"
      />
      <SSDivider style={dividerTheme('dark').primary} />{' '}
    </>
  ) : (
    ''
  );

  return (
    <SSDrawer
      anchor="bottom"
      open={history.location.pathname === '/displays/add-new-display'}
      onClose={handleClose}
      id="add-device-drawer"
      top={drawerTop}
      // loader={loader}
      {...drawerTheme(theme).drawer}>
      <Grid container style={{ padding: '40px' }} justifyContent="center">
        <Grid item className={classes.container}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <SSTypography label="Add New Display" {...typographyTheme('dark').drawerTitle} />
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <SSButton onClick={handleClose} {...buttonTheme('dark').secondary}>
                        Cancel
                      </SSButton>
                    </Grid>
                    <Grid item>
                      <SSButton type="submit" {...buttonTheme('dark').primary}>
                        Add Display
                      </SSButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <SSDivider style={dividerTheme('dark').primary} />
            {clientsContent}
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '40px 0 0 0' }}>
              <DisplayForm control={control} setValue={setValue} watch={watch} />
            </Grid>
          </form>
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

export default AddDevice;
