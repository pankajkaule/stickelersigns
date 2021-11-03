import React, { useCallback, useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { SSDrawer, SSTabs } from '@ss/ui-components';
import { Grid } from '@material-ui/core';
import useStyles from './index.styles';
import { useHistory } from 'react-router';
import DeviceControls from '../DeviceControls';
import Configurations from '../Configurations';
import Schedule from '../Schedule';
import Details from '../Details';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import drawerTheme from 'themes/drawer.theme';
import { tabsTheme } from 'themes/tabs.theme';
import { buttonTheme } from 'themes/button.theme';
import DeviceServices from 'utils/services/DeviceService';
import { UserContext } from 'context/user';
import useQuery from 'hooks/useQuery';
function DeviceSettings(props) {
  const { theme = 'dark', handleRedirectBack } = props;
  const query = useQuery();
  const deviceId = query.get('deviceId');
  const { userState, userDispatch } = useContext(UserContext);
  const { selectedBusiness, id } = userState;
  const [deviceDetails, setDeviceDetails] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [showChangePopup, setShowChangePopup] = useState(false);
  const [nextStepValue, setNextStepValue] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const { drawerTop } = useDrawerAutoScroll({ id: 'device-drawer' });

  const fetchDeviceDetails = useCallback(async () => {
    if (!isDelete) {
      const { getDeviceDetailsById } = DeviceServices;
      let clientId = selectedBusiness || id;
      if (deviceId) {
        const result = await getDeviceDetailsById(deviceId, userDispatch, clientId);
        setDeviceDetails(result);
      }
    }
  }, [deviceId, userDispatch, id, selectedBusiness, isDelete]);

  useEffect(() => {
    fetchDeviceDetails();
  }, [fetchDeviceDetails]);

  const handleChange = (e, value) => {
    if (!isChanged) {
      setTabValue(value);
    } else {
      setNextStepValue(value);
      setShowChangePopup(true);
    }
  };

  const handleClose = () => {
    handleRedirectBack();
    setTabValue(0);
    setDeviceDetails({});
    setIsDelete(false);
  };

  const displayDetailsContent = (
    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.settingsPanelContainer}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.tabsContainer}>
          <SSTabs
            value={tabValue}
            handleChange={handleChange}
            list={[
              {
                label: 'CONTROLS',
                component: (
                  <DeviceControls
                    {...deviceDetails}
                    userDispatch={userDispatch}
                    isDelete={isDelete}
                  />
                ),
              },
              {
                label: 'SCHEDULE',
                component: <Schedule />,
              },
              {
                label: 'CONFIGURATIONS',
                component: (
                  <Configurations
                    {...deviceDetails}
                    userDispatch={userDispatch}
                    handleClose={handleClose}
                    selectedBusiness={selectedBusiness}
                    fetchDeviceDetails={fetchDeviceDetails}
                    setIsChanged={setIsChanged}
                    showChangePopup={showChangePopup}
                    nextStepValue={nextStepValue}
                    setTabValue={setTabValue}
                    setShowChangePopup={setShowChangePopup}
                    setIsDelete={setIsDelete}
                  />
                ),
              },
              {
                label: 'DETAILS',
                component: <Details {...deviceDetails} />,
              },
              {
                label: 'SCREENSAVER',
                component: <></>,
              },
            ]}
            {...tabsTheme(theme).secondary}
            buttonTheme={buttonTheme('dark').close}
            handleClick={handleClose}
          />
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <SSDrawer
      anchor="bottom"
      open={history.location.pathname === `/displays/settings`}
      onClose={handleClose}
      id="device-drawer"
      top={drawerTop}
      {...drawerTheme(theme).drawer}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.container}>
          {displayDetailsContent}
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

export default React.memo(DeviceSettings);
