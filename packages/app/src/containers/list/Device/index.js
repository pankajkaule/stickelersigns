import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid } from '@material-ui/core';
import { SSButton, SSButtonSwitch, SSCheckbox, SSList, SSTypography } from '@ss/ui-components';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useHistory } from 'react-router';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import themeConstants from 'themes/constants';
import devicesContainerTheme from 'containers/grid/Devices/index.theme';
import DownloadIcon from 'components/icons/Download';
import LogoContainer from 'containers/Logo';
import SettingsButtonIcon from 'components/icons/SettingsButton';
import { clientListView } from 'components/GenericList/index.theme';
import landscapeImage from 'assets/images/landscape.png';
import portraitImage from 'assets/images/portrait.png';
import { typographyTheme } from 'themes/typography.theme';
import checkboxTheme from 'themes/checkbox.theme';
import { buttonTheme } from 'themes/button.theme';

function DeviceList(props) {
  const {
    theme = 'dark',
    deviceId,
    deviceName,
    projectName,
    installedAppVersion,
    availableLatestAppVersion,
    orientationType = 'LANDSCAPE',
    id,
    selectedDevices,
    handleChange,
    showSettingsIcon,
    showSearchBox,
    deviceStatus,
    showApprovalActions,
    handleReject,
    handleApprove,
    platform,
    showStatus,
    showUpdate,
    updated,
    client,
    showClientInfo,
    setDeviceId,
  } = props;
  const history = useHistory();

  console.log(props);

  const deviceStatusFlag = deviceStatus === 'ON' ? true : false;

  const currentActivityContent =
    deviceStatusFlag && !showApprovalActions ? (
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

  const tvIcon = (
    <Avatar
      style={{ width: '80px', height: '80px' }}
      variant="rounded"
      src={orientationType === 'POTRAIT' ? portraitImage : landscapeImage}
    />
  );

  const settingsContent = showSettingsIcon ? (
    <Grid item>
      <SSButton
        onClick={() => {
          setDeviceId(deviceId);
          history.push(`/displays/settings?deviceId=${deviceId}`);
        }}
        variant="contained"
        {...devicesContainerTheme('dark').settingsButton}>
        <SettingsButtonIcon />
      </SSButton>
    </Grid>
  ) : (
    ''
  );

  const approvalContent = (
    <Grid item>
      <Grid container spacing={2}>
        <Grid item>
          <SSButton
            id="close-icon-btn"
            onClick={handleReject}
            variant="contained"
            {...devicesContainerTheme(theme).settingsButton}>
            <CloseIcon />
          </SSButton>
        </Grid>
        <Grid item>
          <SSButton
            id="check-icon-btn"
            onClick={handleApprove}
            variant="contained"
            {...devicesContainerTheme(theme).settingsButton}>
            <CheckIcon />
          </SSButton>
        </Grid>
      </Grid>
    </Grid>
  );

  const actionsPanelContent = showApprovalActions ? approvalContent : settingsContent;

  const searchBoxContent = showSearchBox ? (
    <Grid item>
      <SSCheckbox
        value={selectedDevices.indexOf(id) >= 0}
        onChange={(e) => handleChange(e, id)}
        {...checkboxTheme(theme).primary}
      />
    </Grid>
  ) : (
    ''
  );

  const statusContent = showStatus ? (
    <Grid item>
      <SSButtonSwitch
        handleClick={() => {}}
        value={deviceStatusFlag}
        {...devicesContainerTheme('dark').switchBtn}
      />
    </Grid>
  ) : (
    ''
  );

  const showUpdateContent = showUpdate ? (
    <Grid item>
      <Grid container>
        {updated ? <SSTypography label="Updated" {...typographyTheme(theme).updateStatus} /> : ''}
        <Grid item>
          <SSButton {...buttonTheme(theme).primary}>
            <Grid item style={{ margin: '5px 5px 0 0' }}>
              <GetAppIcon style={{ fontSize: '12px' }} />
            </Grid>
            {updated ? 'Retry Update' : 'Update'}
          </SSButton>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    ''
  );

  return (
    <SSList {...clientListView(theme).listCard}>
      <Grid container justify="space-between" alignItems="center" style={{ height: '100%' }}>
        <Grid item>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                {searchBoxContent}
                <Grid item>
                  <LogoContainer>{tvIcon}</LogoContainer>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
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
          </Grid>
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>{showClientInfo ? clientInfoContent : softwareUpdatesContent}</Grid>
            {statusContent}
            {showUpdate ? showUpdateContent : actionsPanelContent}
          </Grid>
        </Grid>
      </Grid>
    </SSList>
  );
}

DeviceList.propTypes = {
  theme: PropTypes.string,
  deviceName: PropTypes.string,
  projectName: PropTypes.string,
  installedAppVersion: PropTypes.string,
  availableLatestAppVersion: PropTypes.string,
  orientationType: PropTypes.string,
  lastBeatReceivedOn: PropTypes.string,
  index: PropTypes.number,
  dispatch: PropTypes.func,
  showSettingsIcon: PropTypes.bool,
  showSearchBox: PropTypes.bool,
  showStatus: PropTypes.bool,
  showClientInfo: PropTypes.bool,
};

DeviceList.defaultProps = {
  theme: 'dark',
  deviceName: '',
  projectName: '',
  installedAppVersion: '',
  availableLatestAppVersion: '',
  orientationType: '',
  lastBeatReceivedOn: '',
  index: null,
  dispatch: () => {},
  showSettingsIcon: true,
  showSearchBox: false,
  showStatus: true,
  showClientInfo: false,
};

export default DeviceList;
