import React, { useCallback, useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { SSButton, SSTypography } from '@ss/ui-components';
import { buttonTheme } from 'themes/button.theme';
import { typographyTheme } from 'themes/typography.theme';
import themeConstants from 'themes/constants';
import useStyles from './index.styles';
import Search from 'components/filters/Search';
import GroupFilter from 'components/filters/GroupFilter';
import DeviceList from 'containers/list/Device';
import DeviceServices from 'utils/services/DeviceService';
import { UserContext } from 'context/user';
function DisplayAppUpdates(props) {
  // const { theme = 'dark' } = props;
  const { userDispatch } = useContext(UserContext);
  const classes = useStyles();

  const fetchLatestVersion = useCallback(async () => {
    const { getLatestAppVersion } = DeviceServices;
    const postBody = {
      searchCriterias: [
        {
          criteriaName: 'platform',
          value: 'LG',
        },
      ],
    };
    const result = await getLatestAppVersion({ postBody: postBody, dispatch: userDispatch });
    console.log(result);
  }, [userDispatch]);

  useEffect(() => {
    fetchLatestVersion();
  }, [fetchLatestVersion]);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <AutorenewIcon
                  style={{ fontSize: '74px', color: themeConstants['dark'].colorWhite }}
                />
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <SSTypography
                      label={` Version: 20.65`}
                      {...typographyTheme('dark', 'regular').drawerTitle}
                      color={themeConstants['dark'].colorWhite}
                      letterSpacing="normal"
                    />
                  </Grid>
                  <Grid item style={{ width: '670px' }}>
                    <SSTypography
                      label={` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                      unknown printer took a galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries.`}
                      {...typographyTheme('dark', 'regular').deviceInfo}
                      overflowEllipsis={false}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <SSButton {...buttonTheme('dark').secondary}>View Details</SSButton>
              </Grid>
              <Grid item>
                <SSButton {...buttonTheme('dark').primary}>Update All</SSButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ margin: '40px 0 20px 0' }}
        className={classes.root}>
        <SSTypography
          label={`Software Updates available for 4 of your displays.`}
          {...typographyTheme('dark', 'regular').secondary}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
        <Grid container spacing={2}>
          <Grid item>
            <Search label="Search Displays" />
          </Grid>
          <Grid item>
            <GroupFilter
              value={['']}
              allLabel="All Displays"
              showActions={false}
              title="View group"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '20px 0 0' }}>
            <DeviceList deviceName="ABCD" showUpdate />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DisplayAppUpdates;
