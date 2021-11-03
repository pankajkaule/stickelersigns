import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Grid } from '@material-ui/core';
import ControlledInput from 'components/ControlledInput';
import landscapeImage from 'assets/images/landscape.png';
import portraitImage from 'assets/images/portrait.png';
import { SSButtonToggle } from '@ss/ui-components';
import DeviceServices from 'utils/services/DeviceService';
import { UserContext } from 'context/user';
import ControlledAutocomplete from 'components/ConrolledAutocomplete';
import { buttonTheme } from 'themes/button.theme';
import { convertIntoAutoCompleteFormat } from 'utils/helpers/other';

const inputTheme = {
  width: '570px',
};

function DisplayForm(props) {
  const { control, setValue, watch, showOrientation, disabled } = props;
  const { userDispatch } = useContext(UserContext);
  // const [deviceGroupList, setDeviceGroupList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [brandList, setBrandList] = useState([]);

  // const { selectedBusiness } = userState;

  // const getGroupSearchCriteria = useCallback(() => {
  //   const finalSearchCriteria = [];
  //   if (selectedBusiness) {
  //     finalSearchCriteria.push({
  //       criteriaName: 'clientId',
  //       value: `${selectedBusiness}`,
  //     });
  //   }
  //   return finalSearchCriteria;
  // }, [selectedBusiness]);

  const fetchDeviceModels = useCallback(async () => {
    const { getDeviceModel } = DeviceServices;
    setModelList(convertIntoAutoCompleteFormat(await getDeviceModel(userDispatch)));
  }, [userDispatch]);

  const fetchDeviceBrands = useCallback(async () => {
    const { getDeviceBrands } = DeviceServices;
    setBrandList(convertIntoAutoCompleteFormat(await getDeviceBrands(userDispatch)));
  }, [userDispatch]);

  // const fetchDeviceGroups = useCallback(async () => {
  //   const { fetchAllDeviceGroups } = DeviceServices;
  //   const postBody = {
  //     searchCriterias: getGroupSearchCriteria(),
  //     pageRequest: {
  //       page: 0,
  //       size: 1000,
  //     },
  //   };
  //   setDeviceGroupList(
  //     convertIntoDeviceGroupDropDown(await fetchAllDeviceGroups(postBody, userDispatch), 'id'),
  //   );
  // }, [userDispatch, getGroupSearchCriteria]);

  // useEffect(() => {
  //   fetchDeviceGroups();
  // }, [fetchDeviceGroups]);

  useEffect(() => {
    if (!modelList.length) {
      fetchDeviceModels();
    }
  }, []);

  useEffect(() => {
    if (!brandList.length) {
      fetchDeviceBrands();
    }
  }, []);

  const tvIcon = (
    <Avatar
      style={{ width: '380px', height: '380px' }}
      variant="rounded"
      src={watch('orientationType') === 'POTRAIT' ? portraitImage : landscapeImage}
    />
  );

  const orientationContent = showOrientation ? (
    <Grid item>
      <SSButtonToggle
        handleSelect={(name, value) => setValue(name, value)}
        title="Orientation Type"
        name="orientationType"
        value={watch('orientationType')}
        list={[
          { label: 'Landscape', value: 'LANDSCAPE' },
          { label: 'Portrait', value: 'POTRAIT' },
        ]}
        {...buttonTheme('dark').toggle}
      />
    </Grid>
  ) : (
    ''
  );

  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} sm={6} md={7} lg={7}>
        <Grid container direction="column">
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Display Name"
              name="deviceName"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Display Name is a required field'}
              setValue={setValue}
            />
          </Grid>
          <Grid item style={{ margin: '0 0 40px 0' }}>
            <ControlledInput
              label="* Display Unique Id"
              name="deviceId"
              control={control}
              rules={{ required: true }}
              theme={inputTheme}
              errorMessage={'Display Unique Id is a required field'}
              setValue={setValue}
              disabled={disabled}
            />
          </Grid>

          <Grid item style={{ margin: '0 0 40px 0' }}>
            <Grid container spacing={4}>
              <Grid item>
                <ControlledAutocomplete
                  label="* Brand"
                  name="brand"
                  control={control}
                  rules={{ required: true }}
                  list={brandList}
                  errorMessage="Brand is a required field"
                  setValue={setValue}
                  handleAddOption={(updatedList) => setBrandList(updatedList)}
                  disabled={disabled}
                />
              </Grid>
              <Grid item>
                <ControlledAutocomplete
                  label="* OS  (Operating System)"
                  name="os"
                  control={control}
                  rules={{ required: true }}
                  list={modelList}
                  errorMessage="OS is a required field"
                  setValue={setValue}
                  handleAddOption={(updatedList) => setModelList(updatedList)}
                  disabled={disabled}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={4}>
              {orientationContent}
              {/* <Grid item>
                <ControlledDropdown
                  label="Display Group"
                  name="displayGroup"
                  control={control}
                  list={deviceGroupList}
                />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={5}>
        <Grid container justifyContent="flex-end" direction="column">
          <Grid item>{tvIcon}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

DisplayForm.propTypes = {
  control: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  showOrientation: PropTypes.bool,
  disabled: PropTypes.bool,
};

DisplayForm.defaultProps = { showOrientation: true, disabled: false };

export default DisplayForm;
