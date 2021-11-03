import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid } from '@material-ui/core';
import { SSButton, SSButtonSwitch, SSCard, SSTypography } from '@ss/ui-components';
import useStyles from './index.styles';
import devicesContainerTheme from './index.theme';
import { useHistory } from 'react-router';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DownloadIcon from 'components/icons/Download';
import themeConstants from 'themes/constants';
import LogoContainer from 'containers/Logo';
import SettingsButtonIcon from 'components/icons/SettingsButton';
import { buttonTheme } from 'themes/button.theme';
import cardsTheme from 'themes/cards.theme';
import landscapeImage from 'assets/images/landscape.png';
import portraitImage from 'assets/images/portrait.png';
import { typographyTheme } from 'themes/typography.theme';

function DeviceGrid(props) {
  const {
    theme = 'dark',
    deviceId,
    deviceName,
    projectName,
    installedAppVersion,
    availableLatestAppVersion,
    orientationType = 'LANDSCAPE',
    deviceStatus,
    showApprovalActions,
    deviceApprovalStatus,
    handleReject,
    handleApprove,
    platform,
    showClientInfo,
    client,
    setDeviceId,
  } = props;
  const history = useHistory();

  const classes = useStyles(props);
  const tvIcon = (
    <Avatar
      variant="rounded"
      className={classes.logo}
      src={orientationType === 'POTRAIT' ? portraitImage : landscapeImage}
    />
  );

  const deviceStatusFlag = deviceApprovalStatus ? false : deviceStatus === 'ON' ? true : false;

  let border = deviceStatusFlag
    ? '3px solid transparent'
    : `3px solid ${themeConstants[theme].colorBackBlue}`;

  const currentActivityContent = projectName ? (
    <Grid item xs={12} md={12} sm={12} lg={12}>
      <SSTypography
        label={`Current activity: ${projectName}`}
        {...typographyTheme('dark', 'regular').other}
      />
    </Grid>
  ) : (
    ''
  );

  const deviceIdContent = showApprovalActions ? (
    <Grid item xs={12} md={12} sm={12} lg={12}>
      <SSTypography label={`${deviceId}`} {...typographyTheme('dark', 'regular').other} />
    </Grid>
  ) : (
    ''
  );

  const deviceInfoContent = showApprovalActions ? (
    <Grid item xs={12} md={12} sm={12} lg={12}>
      <SSTypography label={`${platform}`} {...typographyTheme('dark', 'regular').other} />
    </Grid>
  ) : (
    ''
  );

  const clientInfoContent = showClientInfo ? (
    <SSTypography
      label={
        <Grid container alignItems="center">
          <Grid item>{client.name}</Grid>
        </Grid>
      }
      {...typographyTheme('dark', 'regular').other}
    />
  ) : (
    ''
  );

  const softwareUpdatesContent =
    installedAppVersion < availableLatestAppVersion ? (
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
    ) : (
      ''
    );

  const deviceActionContent = showApprovalActions ? (
    <Grid item>
      <Grid container spacing={2}>
        <Grid item>
          <SSButton
            id="close-icon-btn"
            onClick={handleReject}
            variant="contained"
            {...buttonTheme(theme).settings}>
            <CloseIcon />
          </SSButton>
        </Grid>
        <Grid item>
          <SSButton
            id="check-icon-btn"
            onClick={handleApprove}
            variant="contained"
            {...buttonTheme(theme).settings}>
            <CheckIcon />
          </SSButton>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Grid item>
      <SSButton
        onClick={() => {
          setDeviceId(deviceId);
          history.push(`/displays/settings?deviceId=${deviceId}`);
        }}
        variant="contained"
        {...buttonTheme(theme).settings}>
        <SettingsButtonIcon />
      </SSButton>
    </Grid>
  );

  return (
    <Grid item xs={6} sm={6} md={4} lg={4} className={classes.cardsContainer}>
      <SSCard {...cardsTheme(theme).secondary} border={border}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container justify="space-between">
              <Grid item xs={9} md={9} sm={8} lg={8}>
                <Grid container>
                  <Grid item xs={12} md={12} sm={12} lg={12}>
                    <SSTypography
                      label={deviceName}
                      {...typographyTheme('dark', 'regular').infoProfile}
                    />
                  </Grid>
                  {currentActivityContent}
                  {deviceIdContent}
                  {deviceInfoContent}
                </Grid>
              </Grid>
              <Grid item>
                <SSButtonSwitch
                  handleClick={() => {}}
                  value={deviceStatusFlag}
                  inActiveLabel={deviceApprovalStatus || 'OFF'}
                  activeLabel={'ON'}
                  {...buttonTheme(theme).switch}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <LogoContainer {...devicesContainerTheme(theme).logo}>{tvIcon}</LogoContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>{showClientInfo ? clientInfoContent : softwareUpdatesContent}</Grid>
              {deviceActionContent}
            </Grid>
          </Grid>
        </Grid>
      </SSCard>
    </Grid>
  );
}

DeviceGrid.propTypes = {
  theme: PropTypes.string,
  deviceName: PropTypes.string,
  projectName: PropTypes.string,
  installedAppVersion: PropTypes.string,
  availableLatestAppVersion: PropTypes.string,
  orientationType: PropTypes.string,
  lastBeatReceivedOn: PropTypes.string,
  index: PropTypes.number,
  dispatch: PropTypes.func,
  showApprovalActions: PropTypes.bool,
  deviceApprovalStatus: PropTypes.string,
  handleReject: PropTypes.func,
  handleApprove: PropTypes.func,
  showClientInfo: PropTypes.bool,
};

DeviceGrid.defaultProps = {
  theme: 'dark',
  deviceName: '',
  projectName: '',
  installedAppVersion: '',
  availableLatestAppVersion: '',
  orientationType: '',
  lastBeatReceivedOn: '',
  index: null,
  dispatch: () => {},
  showApprovalActions: false,
  deviceApprovalStatus: '',
  handleReject: () => {},
  handleApprove: () => {},
  showClientInfo: false,
};

export default DeviceGrid;
