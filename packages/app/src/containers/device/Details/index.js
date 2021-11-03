import React from 'react';
import { Grid } from '@material-ui/core';
import { SSList, SSProgress, SSTypography } from '@ss/ui-components';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import useStyles from './index.styles';
import { progressTheme } from 'themes/progress.theme';
import { typographyTheme } from 'themes/typography.theme';
import DownloadIcon from 'components/icons/Download';
import themeConstants from 'themes/constants';
import { listTheme } from 'themes/list.theme';

function Details(props) {
  const {
    theme = 'dark',
    lanIpAddress,
    lanMacAddress,
    ram,
    ramUsed,
    storage,
    storageUsed,
    wiFiIpAddress,
    wiFiMacAddress,
    platformAppVersion,
    platform,
    deviceId,
    fdqnAddress,
  } = props;

  const classes = useStyles();

  const getValueFromString = (string, splitBy, position) => {
    return string && string !== undefined ? Number(string.split(splitBy)[position]) : 0;
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '40px 0' }}>
        <SSList {...listTheme('dark').primary}>
          <Grid
            container
            style={{ height: '100%' }}
            justifyContent="space-between"
            alignItems="center">
            <Grid item>
              <Grid container alignItem="center" spacing={2}>
                <Grid item>
                  <AutorenewIcon />
                </Grid>
                <Grid item style={{ alignSelf: 'center' }}>
                  <SSTypography
                    label={`Current Display App version: ${platformAppVersion}`}
                    {...typographyTheme('dark').infoWhite}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <SSTypography
                label={
                  <Grid container alignItems="center">
                    <Grid item style={{ margin: '0 7px 0 0' }}>
                      <DownloadIcon fill={themeConstants[theme].colorWhite} />
                    </Grid>
                    <Grid item>Software updates available</Grid>
                  </Grid>
                }
                {...typographyTheme('dark', 'regular').link}
              />
            </Grid>
          </Grid>
        </SSList>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
                <SSProgress
                  value={
                    (getValueFromString(storageUsed, 'GB', 0) /
                      getValueFromString(storage, 'GB', 0)) *
                      100 || 0
                  }
                  variant="determinate"
                  label="Storage"
                  description={`${storageUsed || '0GB'} used of ${storage || '0GB'}`}
                  {...progressTheme(theme).primary}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
                <SSProgress
                  value={
                    (getValueFromString(ramUsed, 'GB', 0) / getValueFromString(ram, 'GB', 0)) *
                      100 || 0
                  }
                  variant="determinate"
                  label="RAM"
                  description={`${ramUsed || '0GB'} used of ${ram || '0GB'}`}
                  {...progressTheme(theme).primary}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Grid container direction="column">
              <Grid item xs={12} sm={12} md={12} lg={12} className={classes.typographyPrimary}>
                <SSTypography label="Identification:" {...typographyTheme(theme).deviceInfo} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <SSTypography
                  label={`Device Identifier: ${deviceId || 'NA'}`}
                  {...typographyTheme(theme).deviceInfo}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <SSTypography
                  label={`Device Platform: ${platform || 'NA'}`}
                  {...typographyTheme(theme).deviceInfo}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <SSTypography
                  label={`App Version: ${platformAppVersion || 'NA'}`}
                  {...typographyTheme(theme).deviceInfo}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Grid container direction="column">
              <Grid item xs={12} sm={12} md={12} lg={12} className={classes.typographyPrimary}>
                <SSTypography label="Networking:" {...typographyTheme(theme).deviceInfo} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <SSTypography
                  label={`Lan Mac Address: ${lanMacAddress || 'NA'}`}
                  {...typographyTheme(theme).deviceInfo}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <SSTypography
                  label={`Lan IP Address: ${lanIpAddress || 'NA'}`}
                  {...typographyTheme(theme).deviceInfo}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <SSTypography
                  label={`WiF IMac Address: ${wiFiMacAddress || 'NA'}`}
                  {...typographyTheme(theme).deviceInfo}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <SSTypography
                  label={`WiFI IP Address: ${wiFiIpAddress || 'NA'}`}
                  {...typographyTheme(theme).deviceInfo}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <SSTypography
                  label={`fdqn Address: ${fdqnAddress || 'NA'}`}
                  {...typographyTheme(theme).deviceInfo}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Details.propTypes = {};

Details.defaultProps = {};

const areEqual = (prev, next) => {
  return prev.deviceId !== next.deviceId ? false : true;
};

export default React.memo(Details, areEqual);
