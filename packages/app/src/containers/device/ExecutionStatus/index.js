import React, { useCallback, useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { SSButton, SSDivider, SSDrawer, SSTable, SSTypography } from '@ss/ui-components';
import { useHistory } from 'react-router';
import drawerTheme from 'themes/drawer.theme';
import useStyles from './index.styles';
import { typographyTheme } from 'themes/typography.theme';
import { buttonTheme } from 'themes/button.theme';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import { tableTheme } from 'themes/table.theme';
import { dummyDeviceColumns } from 'utils/api/dummyResponse';
import { dividerTheme } from 'themes/divider.theme';
import useQuery from 'hooks/useQuery';
import DeviceServices from 'utils/services/DeviceService';
import { UserContext } from 'context/user';
import { convertIntoExecutionStatusTable } from 'utils/helpers/dataConverters';

function DeviceExecutionStatus() {
  const history = useHistory();
  const { userDispatch } = useContext(UserContext);
  const [rows, setRows] = useState();
  const [columns, setColumns] = useState();
  const query = useQuery();
  const deviceId = query.get('deviceId');
  const { drawerTop } = useDrawerAutoScroll({ id: 'device-execution-status' });
  const classes = useStyles();

  const fetchDeviceCommands = useCallback(async () => {
    if (deviceId) {
      const { getDeviceCommandList } = DeviceServices;
      const postBody = {
        searchCriterias: [
          {
            criteriaName: 'deviceId',
            value: deviceId,
          },
        ],
        pageRequest: {
          page: 0,
          size: 1000,
        },
      };
      setRows(
        convertIntoExecutionStatusTable(
          await getDeviceCommandList({ postBody, dispatch: userDispatch }),
        ),
      );
    }
  }, [userDispatch, deviceId]);

  useEffect(() => {
    if (history.location.pathname === '/displays/execution-status') {
      fetchDeviceCommands();
    }
  }, [fetchDeviceCommands, history.location.pathname]);

  useEffect(() => {
    setColumns(dummyDeviceColumns);
  }, []);

  const handleClose = () => {
    history.goBack();
  };

  return (
    <SSDrawer
      anchor="bottom"
      open={history.location.pathname === '/displays/execution-status'}
      onClose={handleClose}
      id="device-execution-status"
      top={drawerTop}
      {...drawerTheme('dark').drawer}>
      <Grid container style={{ padding: '40px' }} justifyContent="center">
        <Grid item className={classes.container}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <SSTypography label="EXECUTION STATUS" {...typographyTheme('dark').drawerTitle} />
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
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <SSTable columns={columns} rows={rows} {...tableTheme('dark').primary} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

export default DeviceExecutionStatus;
