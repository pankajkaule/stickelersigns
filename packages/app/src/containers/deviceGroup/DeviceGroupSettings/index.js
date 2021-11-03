import React, { useCallback, useContext, useEffect, useState } from 'react';
import { SSButton, SSDivider, SSDrawer, SSInput, SSSearch, SSTypography } from '@ss/ui-components';
import drawerTheme from 'themes/drawer.theme';
import { useHistory } from 'react-router';
import useDrawerAutoScroll from 'hooks/useDrawereAutoScroll';
import { Grid } from '@material-ui/core';
import useStyles from './index.styles';
import { typographyTheme } from 'themes/typography.theme';
import { buttonTheme } from 'themes/button.theme';
import { inputTheme } from 'themes/inputTheme';
import useDebounce from 'hooks/useDebounce';
import useQuery from 'hooks/useQuery';
import DeviceServices from 'utils/services/DeviceService';
import { UserContext } from 'context/user';
import { dividerTheme } from 'themes/divider.theme';
import DeviceList from 'containers/list/Device';

function DeviceGroupSettings(props) {
  const { theme = 'dark', handleClose } = props;
  const history = useHistory();
  const query = useQuery();
  const groupId = query.get('groupId');
  const groupNamePara = query.get('groupName');
  const { userDispatch, userState } = useContext(UserContext);
  const { selectedBusiness } = userState;
  const [deviceList, setDeviceList] = useState([]);
  const [groupDetails, setGroupDetails] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [groupName, setGroupName] = useState('');
  const [selectedDevices, setSelectedDevices] = useState([]);
  const searchTerm = useDebounce(searchValue, 500);
  const { drawerTop } = useDrawerAutoScroll({ id: 'device-group-drawer' });
  const classes = useStyles();

  const handleReset = () => {
    setGroupName('');
    setSelectedDevices([]);
    setSearchValue('');
    setGroupDetails([]);
  };

  const handleCloseAndReset = () => {
    handleReset();
    handleClose();
  };

  const handleDelete = () => {
    const { deleteDeviceGroup } = DeviceServices;
    const postBody = {
      groupId: Number(groupId),
    };
    deleteDeviceGroup({ postBody, dispatch: userDispatch, handleClose: handleCloseAndReset });
  };
  const handleUpdate = async () => {
    const { updateDeviceGroupDetails } = DeviceServices;
    const postBody = {
      groupName: groupName,
      deviceId: selectedDevices,
    };
    await updateDeviceGroupDetails({
      postBody,
      dispatch: userDispatch,
      handleClose: handleCloseAndReset,
    });
  };
  const handleCreateGroup = async () => {
    const { createDeviceGroup } = DeviceServices;
    const postBody = {
      groupName: groupName,
      description: '',
      deviceId: selectedDevices,
    };
    await createDeviceGroup({ postBody, dispatch: userDispatch, handleClose: handleCloseAndReset });
  };

  const getGroupSearchCriteria = useCallback(() => {
    const finalSearchCriteria = [];
    if (groupNamePara) {
      finalSearchCriteria.push({
        criteriaName: 'groupName',
        value: groupNamePara,
      });
    }
    if (selectedBusiness) {
      finalSearchCriteria.push({
        criteriaName: 'clientId',
        value: `${selectedBusiness}`,
      });
    }
    return finalSearchCriteria;
  }, [groupNamePara, selectedBusiness]);

  const fetchDeviceGroupDetails = useCallback(async () => {
    const { getDeviceGroupDetails } = DeviceServices;
    const postBody = {
      searchCriterias: getGroupSearchCriteria(),
      pageRequest: {
        page: 0,
        size: 1,
      },
    };
    setGroupDetails(await getDeviceGroupDetails({ postBody, dispatch: userDispatch }));
  }, [getGroupSearchCriteria, userDispatch]);

  useEffect(() => {
    if (groupId) {
      fetchDeviceGroupDetails();
    }
  }, [fetchDeviceGroupDetails, groupId]);

  useEffect(() => {
    if (Object.keys(groupDetails).length) {
      const { devices, deviceGroupName } = groupDetails;
      const devicesContainer = [];
      devices.forEach((el) => devicesContainer.push(el.id));
      setSelectedDevices(devicesContainer);
      setGroupName(deviceGroupName);
    }
  }, [groupDetails]);

  const handleChange = (e, id) => {
    let selectedDevicesCopy = Array.from(selectedDevices);
    if (e.target.checked) {
      selectedDevicesCopy.push(id);
      setSelectedDevices(selectedDevicesCopy);
    } else {
      selectedDevicesCopy.splice(selectedDevicesCopy.indexOf(id), 1);
      setSelectedDevices(selectedDevicesCopy);
    }
  };

  const getSearchCriteria = useCallback(() => {
    const finalSearchCriteria = [];
    if (searchTerm) {
      finalSearchCriteria.push({
        criteriaName: 'deviceName',
        value: searchTerm,
      });
    }
    if (selectedBusiness) {
      finalSearchCriteria.push({
        criteriaName: 'clientId',
        value: `${selectedBusiness}`,
      });
    }

    return finalSearchCriteria;
  }, [searchTerm, selectedBusiness]);

  const getDeviceList = useCallback(async () => {
    const { fetchDeviceList } = DeviceServices;
    const postBody = {
      searchCriterias: getSearchCriteria(),
      pageRequest: {
        page: 0,
        size: 1000,
      },
    };
    setDeviceList(await fetchDeviceList({ postBody, dispatch: userDispatch }));
  }, [getSearchCriteria, userDispatch]);

  useEffect(() => {
    getDeviceList();
  }, [getDeviceList]);

  const actionPanel = groupId ? (
    <>
      <Grid item>
        <SSButton {...buttonTheme(theme).secondary} onClick={handleDelete}>
          Delete Group
        </SSButton>
      </Grid>
      <Grid item>
        <SSButton {...buttonTheme(theme).secondary} onClick={handleCloseAndReset}>
          Cancel
        </SSButton>
      </Grid>
      <Grid item>
        <SSButton
          disabled={!groupName.trim().length}
          {...buttonTheme(theme).primary}
          onClick={handleUpdate}>
          Update
        </SSButton>
      </Grid>
    </>
  ) : (
    <>
      <Grid item>
        <SSButton {...buttonTheme(theme).secondary} onClick={handleCloseAndReset}>
          Cancel
        </SSButton>
      </Grid>
      <Grid item>
        <SSButton
          {...buttonTheme(theme).primary}
          onClick={handleCreateGroup}
          disabled={!groupName.trim().length}>
          Create
        </SSButton>
      </Grid>
    </>
  );

  const deviceListContent = deviceList.map((el) => (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '15px 0 0 0' }}>
      <DeviceList
        {...el}
        selectedDevices={selectedDevices}
        handleChange={handleChange}
        showSettingsIcon={false}
        showSearchBox={true}
      />
    </Grid>
  ));

  return (
    <SSDrawer
      anchor="bottom"
      open={history.location.pathname.includes('/displays/groups/add-edit')}
      onClose={handleCloseAndReset}
      id="device-group-drawer"
      top={drawerTop}
      {...drawerTheme(theme).drawer}>
      <Grid container justify="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.container}
          style={{ padding: '30px 0' }}>
          <Grid container direction="column">
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ height: '40px', maxHeight: '40px' }}>
              <Grid container justify="space-between">
                <Grid item>
                  <SSTypography
                    label={groupId ? 'EDIT GROUP' : 'CREATE NEW GROUP'}
                    {...typographyTheme('dark').drawerTitle}
                  />
                </Grid>
                <Grid item>
                  <Grid container spacing={2} justify="flex-end">
                    {actionPanel}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <SSDivider {...dividerTheme('dark').primary} />
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <SSInput
                    label="Group Name"
                    {...inputTheme(theme).primary}
                    value={groupName}
                    width="570px"
                    disabled={groupNamePara ? true : false}
                    onChange={(e) => {
                      setGroupName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <SSTypography
                    label={`Device Selected: ${selectedDevices.length}`}
                    {...typographyTheme(theme).secondary}
                    margin="15px 0 0 0"
                  />
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
          style={{
            margin: '0 10px',
            background: '#101012',
            borderRadius: '10px 10px 0 0',
          }}>
          <Grid container className={classes.container} style={{ margin: '0 auto' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '30px 0 15px' }}>
              <SSSearch
                placeholder="Search display"
                {...inputTheme(theme).searchBox}
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                handleClear={() => setSearchValue('')}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.listContainer}>
              <Grid container>{deviceListContent}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SSDrawer>
  );
}

DeviceGroupSettings.propTypes = {};

DeviceGroupSettings.defaultProps = {};

export default React.memo(DeviceGroupSettings);
