// external-library imports
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid, Slide } from '@material-ui/core';
import moment from 'moment';
// internal-library imports
import { SSTypography, SSButtonSwitch } from '@ss/ui-components';
// app-imports
import useStyles from './index.styles';
import deviceSummaryTheme from './index.theme';
import { typographyTheme } from 'themes/typography.theme';
import { getDateAfterDays } from 'utils/helpers/dateTime';
import TVLandScapeIcon from 'components/icons/TvLandscape';
import TVPortraitIcon from 'components/icons/TvPortrait';
import LogoContainer from 'containers/Logo';
import { buttonTheme } from 'themes/button.theme';
import themeConstants from 'themes/constants';
import DownloadIcon from 'components/icons/Download';

function DeviceSummary({
  isNew,
  groupName = 'ABCD Group',
  deviceName = 'Samsung',
  orientationType = 'LANDSCAPE',
  installedAppVersion = '0.0.0',
  availableLatestAppVersion = '0.0.0',
  projectName = 'ABCD PRoject',
  lastBeatReceivedOn = '2021-05-10T21:58:39.194Z',
  createdDate = '2021-05-10T21:58:39.194Z',
  theme = 'dark',
}) {
  const classes = useStyles({ height: isNew ? '307px' : '570px' });
  const [render, setRender] = useState(false);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setRender(true);
    }, 100);
    return () => {
      setRender(false);
      clearTimeout(timeOut);
    };
  }, []);

  const currentActivityContent = projectName ? (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ height: '16px', marginBottom: '12.6px' }}>
      <SSTypography
        label={`Current Activity: ${projectName}`}
        {...typographyTheme(theme).secondary}
        textAlign="center"
      />
    </Grid>
  ) : (
    ''
  );

  const currentGroupContent = groupName ? (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ height: '16px', marginBottom: '12.6px' }}>
      <SSTypography
        label={`Group: ${groupName}`}
        {...typographyTheme(theme).secondary}
        textAlign="center"
      />
    </Grid>
  ) : (
    ''
  );

  const addedSinceContent = createdDate ? (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ height: '16px', marginBottom: '20px' }}>
      <SSTypography
        label={`Added Since:${moment(createdDate).format('DD MMM YY')}`}
        {...typographyTheme(theme).secondary}
        textAlign="center"
      />
    </Grid>
  ) : (
    ''
  );

  const softwareUpdateContent =
    installedAppVersion < availableLatestAppVersion ? (
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginBottom: '37px' }}>
        <SSTypography
          label={
            <Grid container alignItems="center" justify="center">
              <Grid item style={{ margin: '0 7px 0 0' }}>
                <DownloadIcon fill={themeConstants[theme].colorWhite} />
              </Grid>
              <Grid item>Software updates available</Grid>
            </Grid>
          }
          {...typographyTheme(theme).secondary}
          textAlign="center"
          color={themeConstants[theme].colorWhite}
        />
      </Grid>
    ) : (
      ''
    );

  const deviceOperationalStatus =
    new Date(lastBeatReceivedOn).getTime() < getDateAfterDays() || false;

  const orientationContent =
    orientationType === 'LANDSCAPE' ? <TVLandScapeIcon /> : <TVPortraitIcon />;

  const deviceSummaryContent = isNew ? (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <LogoContainer justify="center" {...deviceSummaryTheme('dark').logo}>
          {orientationContent}
        </LogoContainer>
      </Grid>
    </Grid>
  ) : (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <LogoContainer justify="center" {...deviceSummaryTheme('dark').logo}>
          {orientationContent}
        </LogoContainer>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ height: '25px', marginBottom: '24.6px' }}>
        <SSTypography label={deviceName} {...typographyTheme('dark').primary} textAlign="center" />
      </Grid>
      {currentActivityContent}
      {currentGroupContent}
      {addedSinceContent}
      {softwareUpdateContent}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid container justify="center">
          <Grid item>
            <SSButtonSwitch
              onClick={() => {}}
              value={deviceOperationalStatus}
              {...buttonTheme(theme).switch}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return render ? (
    <Slide
      direction="up"
      timeout={{ enter: 500, exit: 400 }}
      in={render}
      mountOnEnter
      unmountOnExit>
      <Grid item xs={12} sm={12} md={2} lg={2} className={classes.deviceSummaryContainer}>
        {deviceSummaryContent}
      </Grid>
    </Slide>
  ) : (
    <Grid item xs={12} sm={12} md={2} lg={2} className={classes.deviceSummaryContainer}></Grid>
  );
}

export default DeviceSummary;
