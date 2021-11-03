import React, { useCallback, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import {
  SSButton,
  SSButtonToggle,
  SSConfirmationDialog,
  SSDivider,
  SSDropdown,
  SSRange,
} from '@ss/ui-components';
import CheckIcon from '@material-ui/icons/Check';
import useStyles from './index.styles';
import styled, { ThemeProvider } from 'styled-components';
import themeConstants from 'themes/constants';
import { buttonTheme } from 'themes/button.theme';
import { rangeTheme } from 'themes/range.theme';
import CaptureIcon from 'components/icons/Capture';
import { confirmationDialogTheme } from 'themes/confirmationDialog.theme';
import dropdownTheme from 'themes/dropdown.theme';
import TooltipBtn from 'components/TooltipBtn';
import { dividerTheme } from 'themes/divider.theme';
import DeviceServices from 'utils/services/DeviceService';
import SwitchIcon from 'components/icons/Switch';
import RefreshIcon from 'components/icons/Refresh';
import DataSyncIcon from 'components/icons/DataSync';
import RebootIcon from 'components/icons/Reboot';
import DisplayRestartIcon from 'components/icons/DisplayRestart';
import { useHistory } from 'react-router';
import { getDeviceCommandParameterValue, getDeviceCommandStatus } from 'utils/helpers/other';

export const StyledSSButton = styled(SSButton)`
  justify-content: flex-start;
  visibility: ${(props) => props.theme.visibility};
  & > span > svg {
    margin: ${(props) => props.theme.margin};
  }

  &:hover > span > svg > g > g {
    fill: ${(props) => props.theme.fill};
  }

  &:focus > span > svg > g > g {
    fill: ${(props) => props.theme.fill};
  }
`;

const list = [
  {
    label: 'HDMI 1.0',
    value: 'HDMI1',
  },
  {
    label: 'HDMI 2.0',
    value: 'HDMI2',
  },
  {
    label: 'HDMI 3.0',
    value: 'HDMI3',
  },
  {
    label: 'Type-c',
    value: 'TYPE-C',
  },
  {
    label: 'VGA',
    value: 'VGA',
  },
];

const screenShotList = [
  {
    label: 'Small: 960 PX x 540 PX',
    value: 'small',
  },
  {
    label: 'Medium: 1280 PX x 720 PX',
    value: 'medium',
  },
  {
    label: 'High: 1920 PX x 1080 PX',
    value: 'full',
  },
];

const getCommandParameters = ({ type, value }) => {
  switch (type) {
    case 'tvSetVolume':
      return {
        commandParameters: [
          {
            parameterName: 'volume',
            parameterValue: value || '100',
          },
        ],
      };
    case 'tvSetInput':
      return {
        commandParameters: [
          {
            parameterName: 'inputType',
            parameterValue: value || 'HDMI1',
          },
        ],
      };
    case 'setOperationalMode':
      return {
        commandParameters: [
          {
            parameterName: 'operationMode',
            parameterValue: value || 'runtime',
          },
        ],
      };
    case 'sendScreenshot':
      return {
        commandParameters: [
          {
            parameterName: 'screenshotType',
            parameterValue: value || 'medium',
          },
        ],
      };

    case 'updateLog':
      return {
        commandParameters: [
          {
            parameterName: 'dayRangeStart',
            parameterValue: value || '1',
          },
          {
            parameterName: 'dayRangeEnd',
            parameterValue: value || '7',
          },
        ],
      };
    default:
      return {
        commandParameter: [],
      };
  }
};

function DeviceControls(props) {
  const { theme = 'dark', deviceId, userDispatch, isDelete } = props;
  const history = useHistory();
  const [deviceSettings, setDeviceSettings] = useState({
    apiBaseUrl: null,
    aspectRatio: 'LANDSCAPE',
    commandStatusUpdateAttempts: 5,
    deviceId: deviceId,
    getDeviceSettingsInterval: 1440,
    rotation: 90,
    runtimeGetCommandsInterval: 40,
    runtimeInternetHealthCheckInterval: 300,
    runtimeScreenshotInterval: 300,
    schedules: [],
    screenLock: true,
    standbyGetCommandsInterval: 5000,
    standbyInternetHealthCheckInterval: 6000,
    standbyScreenshotInterval: 5000,
    templateId: null,
  });
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [draftData, setDraftData] = useState({});
  const [deviceCommands, setDeviceCommands] = useState([]);
  const [currentCommandsStatus, setCurrentCommandsStatus] = useState({
    displayPower: 'tvOn',
    displayMode: 'runtime',
    screenShotValue: '',
    tvVolume: 0,
    inputType: '',
  });

  const [disableAll, setDisableAll] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    if (deviceCommands.length) {
      const currentCommandsStatusCopy = { ...currentCommandsStatus };
      const powerCommand = getDeviceCommandStatus(deviceCommands);
      currentCommandsStatusCopy.displayPower = powerCommand;
      currentCommandsStatusCopy.displayMode = getDeviceCommandParameterValue(
        deviceCommands,
        'setOperationalMode',
      );
      currentCommandsStatusCopy.inputType = getDeviceCommandParameterValue(
        deviceCommands,
        'tvSetInput',
      );
      currentCommandsStatusCopy.screenShotValue = getDeviceCommandParameterValue(
        deviceCommands,
        'sendScreenshot',
      );
      currentCommandsStatusCopy.tvVolume = Number(
        getDeviceCommandParameterValue(deviceCommands, 'tvSetVolume'),
      );
      setCurrentCommandsStatus(currentCommandsStatusCopy);
      if (powerCommand === 'tvOff') {
        setDisableAll(true);
      } else {
        setDisableAll(false);
      }
    }
  }, [deviceCommands]);

  const fetchDeviceSettings = useCallback(async () => {
    if (deviceId && !isDelete) {
      const { getDeviceSettings } = DeviceServices;
      setDeviceSettings(await getDeviceSettings({ deviceId, dispatch: userDispatch }));
    }
  }, [userDispatch, deviceId, isDelete]);

  useEffect(() => {
    fetchDeviceSettings();
  }, [fetchDeviceSettings]);

  const fetchDeviceCommands = useCallback(async () => {
    const { getDeviceCommandList } = DeviceServices;
    if (deviceId && !isDelete) {
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
      setDeviceCommands(await getDeviceCommandList({ postBody, dispatch: userDispatch }));
    }
  }, [userDispatch, deviceId, isDelete]);

  useEffect(() => {
    fetchDeviceCommands();
  }, [fetchDeviceCommands]);

  const handleSave = async () => {
    const { updateDeviceSettings, addDeviceCommand } = DeviceServices;
    const { type } = draftData;
    if (type === 'settings') {
      const { name, value } = draftData;
      const deviceSettingsCopy = { ...deviceSettings };

      deviceSettingsCopy[name] = value;
      setDeviceSettings(deviceSettingsCopy);
      await updateDeviceSettings({
        postBody: deviceSettingsCopy,
        dispatch: userDispatch,
      });
      handleCancel();
    } else if (type === 'command') {
      const { command, commandParameters } = draftData;
      const result = await addDeviceCommand({
        deviceId: deviceId,
        commandName: command,
        commandParameters: commandParameters,
        dispatch: userDispatch,
      });
      handleCancel();
      if (result) {
        fetchDeviceCommands();
      }
      if (command === 'updateLog' && result) {
        history.push(`/displays/logs?deviceId=${deviceId}`);
      }
    }
  };

  const handleCancel = () => {
    setDraftData({});
    setShowConfirmationPopup(false);
  };

  const handleCommand = (command, value) => {
    setDraftData({
      command: command,
      ...getCommandParameters({ type: command, value: value }),
      type: 'command',
    });
    setShowConfirmationPopup(true);
  };

  const handleSettings = (name, value) => {
    if (value !== deviceSettings[name]) {
      setDraftData({ name: name, value: value, type: 'settings' });
      setShowConfirmationPopup(true);
    }
  };

  const handleTVVolume = (name, value) => {
    if (value >= 0 && value <= 100) {
      const currentCommandsStatusCopy = { ...currentCommandsStatus };
      currentCommandsStatusCopy.tvVolume = value;
      setCurrentCommandsStatus(currentCommandsStatusCopy);
      handleCommand('tvSetVolume', value);
    }
  };

  const handleScreenShotValue = (e) => {
    const currentCommandsStatusCopy = { ...currentCommandsStatus };
    currentCommandsStatusCopy.screenShotValue = e.target.value;
    setCurrentCommandsStatus(currentCommandsStatusCopy);
  };

  const fetchDeviceLogs = () => {
    handleCommand('updateLog');
  };

  const switchIconTheme = disableAll
    ? themeConstants['dark'].colorWhite
    : themeConstants['dark'].colorDarkGreen;

  const refreshDisplayTheme = disableAll
    ? themeConstants['dark'].colorBlueGrey
    : themeConstants['dark'].colorDarkYellow;

  const dataSyncUpTheme = disableAll
    ? themeConstants['dark'].colorBlueGrey
    : themeConstants['dark'].colorDarkSkyBlue;

  const rebootAppTheme = disableAll
    ? themeConstants['dark'].colorBlueGrey
    : themeConstants['dark'].colorBloodRed;

  const restartAppTheme = disableAll
    ? themeConstants['dark'].colorBlueGrey
    : themeConstants['dark'].colorBloodRed;

  const labelColor = disableAll
    ? themeConstants['dark'].colorBlueGrey
    : themeConstants['dark'].colorLightGrey;

  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.marginTop}>
        <Grid container alignItems="center" spacing={3}>
          <Grid item>
            <SSButton
              {...buttonTheme(theme).command}
              onClick={() =>
                handleCommand(currentCommandsStatus.displayPower === 'tvOn' ? 'tvOff' : 'tvOn')
              }>
              <SwitchIcon fill={switchIconTheme} />
              <span style={{ margin: '0 0 0 5px' }}>
                {disableAll ? 'Turn Power ON' : 'Turn Display OFF'}
              </span>
            </SSButton>
          </Grid>
          <Grid item>
            <SSButton
              disabled={disableAll}
              {...buttonTheme(theme).command}
              onClick={() => handleCommand('restartApp')}>
              <RefreshIcon fill={refreshDisplayTheme} />
              <span style={{ margin: '0 0 0 5px' }}>Refresh Display App</span>
            </SSButton>
          </Grid>
          <Grid item>
            <SSButton
              disabled={disableAll}
              {...buttonTheme(theme).command}
              onClick={() => handleCommand('sendDeviceInfo')}>
              <DataSyncIcon fill={dataSyncUpTheme} />
              <span style={{ margin: '0 0 0 5px' }}>Data Sync-up</span>
            </SSButton>
          </Grid>
          <Grid item>
            <SSButton
              disabled={disableAll}
              {...buttonTheme(theme).command}
              onClick={() => handleCommand('reloadContent')}>
              <RebootIcon fill={rebootAppTheme} />
              <span style={{ margin: '0 0 0 5px' }}>Reboot TV App</span>
            </SSButton>
          </Grid>

          <Grid item>
            <SSButton
              disabled={disableAll}
              {...buttonTheme(theme).command}
              onClick={() => handleCommand('restartDevice')}>
              <DisplayRestartIcon fill={restartAppTheme} />
              <span style={{ margin: '0 0 0 5px' }}>Restart TV App</span>
            </SSButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.marginTop}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item>
            <SSDropdown
              disabled={disableAll}
              label={'Input Mode'}
              list={list}
              handleChange={(e) => handleCommand('tvSetInput', e.target.value)}
              {...dropdownTheme('dark').commands}
              labelColor={labelColor}
            />
          </Grid>
          <Grid item>
            <SSButtonToggle
              disabled={disableAll}
              title="Display Mode"
              name="displayMode"
              list={[
                { value: 'runtime', label: 'Run Time' },
                { value: 'standby', label: 'Stand by' },
              ]}
              value={currentCommandsStatus.displayMode}
              handleSelect={(name, value) => handleCommand('setOperationalMode', value)}
              {...buttonTheme(theme).toggle}
            />
          </Grid>
          <Grid item>
            <SSButtonToggle
              disabled={disableAll}
              title="Touch Interactivity"
              name="screenLock"
              value={deviceSettings.screenLock}
              handleSelect={handleSettings}
              list={[
                { label: 'Locked', value: true },
                { label: 'Unlocked', value: false },
              ]}
              {...buttonTheme(theme).toggle}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.marginTop}>
        <Grid container spacing={4}>
          <Grid item>
            <SSButtonToggle
              disabled={disableAll}
              title="Rotation"
              value={deviceSettings.rotation}
              handleSelect={handleSettings}
              name="rotation"
              list={
                deviceSettings.aspectRatio === 'POTRAIT'
                  ? [
                      { label: '90°', value: 90 },
                      { label: '270°', value: 270 },
                    ]
                  : [
                      { label: '0°', value: 0 },
                      { label: '180°', value: 180 },
                    ]
              }
              {...buttonTheme(theme).toggle}
            />
          </Grid>
          <Grid item>
            <SSButtonToggle
              disabled={disableAll}
              title="Orientation"
              value={deviceSettings.aspectRatio}
              handleSelect={handleSettings}
              name="aspectRatio"
              list={[
                { label: 'Landscape', value: 'LANDSCAPE' },
                { label: 'Portrait', value: 'POTRAIT' },
              ]}
              {...buttonTheme(theme).toggle}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.marginTop}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item>
            <SSRange
              disabled={disableAll}
              onChange={handleTVVolume}
              title="Volume"
              value={currentCommandsStatus.tvVolume}
              name="volume"
              {...rangeTheme(theme).primary}
            />
          </Grid>
          <Grid item>
            <Grid container spacing={2} style={{ position: 'relative' }}>
              <Grid item>
                <SSDropdown
                  label={'Capture Screenshot'}
                  list={screenShotList}
                  {...dropdownTheme('dark').secondary}
                  disabled={disableAll}
                  labelColor={labelColor}
                  value={currentCommandsStatus.screenShotValue}
                  handleChange={handleScreenShotValue}
                />
              </Grid>
              <Grid item style={{ position: 'absolute', right: '80px', top: '-10px' }}>
                <TooltipBtn
                  label="Please select a option to capture the screen shots"
                  disabled={disableAll}
                />
              </Grid>
              <Grid item style={{ alignSelf: 'flex-end' }}>
                <ThemeProvider
                  theme={{
                    fill: themeConstants[theme].colorWhite,
                    margin: '0 5px 0 0',
                    visibility: disableAll ? 'hidden' : '',
                  }}>
                  <StyledSSButton
                    onClick={() =>
                      handleCommand('sendScreenshot', currentCommandsStatus.screenShotValue)
                    }
                    {...buttonTheme(theme).primary}
                    disabled={disableAll}>
                    <CaptureIcon />
                  </StyledSSButton>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SSDivider {...dividerTheme('dark').primary} />

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid
          container
          alignItems="center"
          className={classes.actionPanelInternalContainer5}
          spacing={2}>
          <Grid item>
            <SSButton
              disabled={disableAll}
              onClick={fetchDeviceLogs}
              {...buttonTheme(theme).secondary}>
              Fetch Display Logs
            </SSButton>
          </Grid>
          <Grid item>
            <SSButton
              disabled={disableAll}
              onClick={() => {
                history.push(`/displays/execution-status?deviceId=${deviceId}`);
              }}
              {...buttonTheme(theme).secondary}>
              Execution status
            </SSButton>
          </Grid>
        </Grid>
      </Grid>
      <SSConfirmationDialog
        open={showConfirmationPopup}
        {...confirmationDialogTheme('dark').secondary}
        buttonPrimaryTheme={{ ...buttonTheme('dark').primary, fontSize: '12px' }}
        buttonSecondaryTheme={{ ...buttonTheme('dark').secondary, fontSize: '12px' }}
        handleSave={handleSave}
        handleCancel={handleCancel}
        primaryBtnLabel={
          <Grid container spacing={1} alignItems="center">
            <Grid item style={{ alignSelf: 'center' }}>
              <CheckIcon style={{ color: 'inherit', fontSize: '12px', margin: '5px 0 0 0' }} />
            </Grid>
            <Grid item>{'Save & Proceed'}</Grid>
          </Grid>
        }
        secondaryBtnLabel={'Undo Changes'}
        title={'Save Changes?'}
        content={
          'You have made some changes to configurations.  Would you like to save it before proceeding?'
        }
      />
    </>
  );
}

DeviceControls.propTypes = {};

DeviceControls.defaultProps = {};

export default React.memo(DeviceControls);
