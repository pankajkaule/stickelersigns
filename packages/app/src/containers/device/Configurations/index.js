import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { SSButton, SSConfirmationDialog, SSDivider } from '@ss/ui-components';
import useStyles from './index.styles';
import { buttonTheme } from 'themes/button.theme';
import { useForm } from 'react-hook-form';
import DisplayForm from 'components/form/Display';
import { dividerTheme } from 'themes/divider.theme';
import DeviceServices from 'utils/services/DeviceService';
import { confirmationDialogTheme } from 'themes/confirmationDialog.theme';

function Configurations(props) {
  const {
    theme = 'dark',
    deviceName,
    deviceId,
    platform,
    platformAppVersion,
    handleClose,
    userDispatch,
    selectedBusiness,
    fetchDeviceDetails,
    setIsChanged,
    showChangePopup,
    nextStepValue,
    setTabValue,
    setShowChangePopup,
    setIsDelete,
  } = props;

  console.log(props);
  const classes = useStyles();
  const { handleSubmit, control, setValue, formState, watch, reset } = useForm();
  const { isDirty } = formState;

  const watchAllFields = watch();

  useEffect(() => {
    setIsChanged(isDirty);
  }, [isDirty, setIsChanged]);

  useEffect(() => {
    setValue('deviceName', deviceName);
    setValue('deviceId', deviceId);
    setValue('brand', { title: platform, value: platform });
    setValue('os', { title: platformAppVersion, value: platformAppVersion });
  }, []);

  const handleCancel = () => {
    setValue('deviceName', deviceName);
    setValue('deviceId', deviceId);
    setValue('brand', { title: platform, value: platform });
    setValue('os', { title: platformAppVersion, value: platformAppVersion });
  };

  const handleSave = async (data, proceed = false) => {
    const { updateDevice } = DeviceServices;
    setShowChangePopup(false);
    let client = selectedBusiness ? { clientId: selectedBusiness } : {};
    let postBody = {
      ...client,
      deviceId: data.deviceId,
      deviceName: data.deviceName,
      platform: data.brand.title,
      PlatformAppVersion: data.os.title,
      orientationType: data.orientationType,
    };

    const result = await updateDevice({ postBody, dispatch: userDispatch });
    if (result) {
      fetchDeviceDetails();
      if (proceed) {
        if (nextStepValue) {
          setTabValue(nextStepValue);
        }
        setIsChanged(false);
      }
    }
  };

  const handleReset = () => {
    reset();
    setShowChangePopup(false);
    setTabValue(nextStepValue);
    setIsChanged(false);
  };

  const handleRemoveDisplay = async () => {
    const { deleteDevice } = DeviceServices;
    setIsDelete(true);
    await deleteDevice({ deviceId, dispatch: userDispatch, handleClose });
  };

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <Grid container direction="column" className={classes.marginTop}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container alignItems="center">
            <DisplayForm
              control={control}
              setValue={setValue}
              watch={watch}
              showOrientation={false}
              disabled={true}
            />
          </Grid>
        </Grid>
        <SSDivider {...dividerTheme('dark').primary} />
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <SSButton onClick={handleRemoveDisplay} {...buttonTheme(theme).secondary}>
                Remove Display
              </SSButton>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <SSButton onClick={handleCancel} {...buttonTheme(theme).secondary}>
                    Cancel
                  </SSButton>
                </Grid>
                <Grid item>
                  <SSButton type="submit" {...buttonTheme(theme).primary}>
                    Save
                  </SSButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <SSConfirmationDialog
          open={showChangePopup}
          {...confirmationDialogTheme('dark').secondary}
          buttonPrimaryTheme={{ ...buttonTheme('dark').primary, fontSize: '12px' }}
          buttonSecondaryTheme={{ ...buttonTheme('dark').secondary, fontSize: '12px' }}
          primaryBtnLabel={
            <Grid container spacing={1} alignItems="center">
              <Grid item style={{ alignSelf: 'center' }}>
                <CheckIcon style={{ color: 'inherit', fontSize: '12px', margin: '5px 0 0 0' }} />
              </Grid>
              <Grid item>Save & Proceed</Grid>
            </Grid>
          }
          handleSave={() => handleSave(watchAllFields, true)}
          handleCancel={handleReset}
        />
      </Grid>
    </form>
  );
}

Configurations.propTypes = {};

Configurations.defaultProps = {};

export default Configurations;
