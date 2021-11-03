import React, { useCallback, useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { SSButton, SSDivider, SSDrawer, SSTypography } from '@ss/ui-components';
import { useHistory } from 'react-router';
import drawerTheme from 'themes/drawer.theme';
import useStyles from './index.styles';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import { typographyTheme } from 'themes/typography.theme';
import { buttonTheme } from 'themes/button.theme';
import { dividerTheme } from 'themes/divider.theme';
import DeviceServices from 'utils/services/DeviceService';
import { UserContext } from 'context/user';
import useQuery from 'hooks/useQuery';

function DeviceLogs() {
  const history = useHistory();
  const { userDispatch } = useContext(UserContext);
  const [deviceLogs, setDeviceLogs] = useState([]);
  const { drawerTop } = useDrawerAutoScroll({ id: 'device-logs' });
  const query = useQuery();
  const deviceId = query.get('deviceId');
  const classes = useStyles();
  const handleClose = () => {
    history.goBack();
  };

  const fetchDeviceLogs = useCallback(async () => {
    if (deviceId) {
      const { getDeviceLogsList } = DeviceServices;
      const postBody = {
        searchCriterias: [
          {
            criteriaName: 'deviceId',
            value: deviceId,
          },
        ],
        pageRequest: {
          page: 0,
          size: 10,
        },
      };

      setDeviceLogs(await getDeviceLogsList({ postBody, dispatch: userDispatch }));
    }
  }, [deviceId, userDispatch]);

  useEffect(() => {
    if (history.location.pathname === '/displays/logs') {
      fetchDeviceLogs();
    }
  }, [fetchDeviceLogs, history.location.pathname]);
  const deviceLogsContent = deviceLogs.length ? (
    deviceLogs.map((el) => (
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <SSTypography
          label={`${el.deviceId}, ${el.deviceDateTimeOffset} ${el.logType} ${el.message}`}
          {...typographyTheme('dark').other}
        />
      </Grid>
    ))
  ) : (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Grid container justifyContent="center" alignItems="center">
        <SSTypography label="No Logs Found" {...typographyTheme('dark').primary} />
      </Grid>
    </Grid>
  );

  return (
    <SSDrawer
      anchor="bottom"
      open={history.location.pathname === '/displays/logs'}
      onClose={handleClose}
      id="device-logs"
      top={drawerTop}
      {...drawerTheme('dark').drawer}>
      <Grid container style={{ padding: '40px' }} justifyContent="center">
        <Grid item className={classes.container}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <SSTypography label="DISPLAY LOGS" {...typographyTheme('dark').drawerTitle} />
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
          <SSDivider style={dividerTheme('dark').primary} />
          <Grid container>{deviceLogsContent}</Grid>
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

export default DeviceLogs;
