import React, { useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import useStyles from './index.styles';
import { useHistory } from 'react-router';
import { ThemeContext } from 'context/theme';
import deviceStore from 'utils/stores/deviceStore';
import deviceReducer from 'utils/reducers/deviceReducer';
import DeviceGrid from 'containers/grid/Devices';
import DeviceList from 'containers/list/Device';
import BasicActions from 'components/BasicActions';
import DeviceSettings from 'containers/device/DeviceSettings';
import AddDevice from 'containers/device/AddDevice';
import * as actions from 'utils/actionTypes';
import NoDataFound from '../../NoDataFound';
import useDebounce from 'hooks/useDebounce';
import { UserContext } from 'context/user';
import DeviceServices from 'utils/services/DeviceService';
import { convertIntoDeviceGroupDropDown } from 'utils/helpers/dataConverters';
import ExecutionStatus from '../ExecutionStatus';
import DeviceLogs from '../Logs';
import { getBusinessSelectionAccess } from 'utils/helpers/permissions';

const filters = [
  { value: 'status-ON', label: 'Status ON' },
  { value: 'status-OFF', label: 'Status OFF' },
  { value: 'isApproved-false', label: 'New Display Request' },
  { value: 'isApproved-true', label: 'Approved Display' },
];

function DeviceContainer() {
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const { userState, userDispatch } = useContext(UserContext);
  const { globalLoader, selectedBusiness, roles } = userState;
  const { theme } = themeState;
  const [dispatch] = useReducer(deviceReducer, deviceStore);
  const [viewToggle, setViewToggle] = useState('grid'); //Flag to set the view type
  const [deviceGroupFilterList, setDeviceGroupFilterList] = useState([]);
  const [groupFilterSearchValue, setGroupFilterSearchValue] = useState('');
  const [deviceList, setDeviceList] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [sortValue, setSortValue] = useState('ASC');
  const [searchValue, setSearchValue] = useState('');
  const [filtersValue, setFiltersValue] = useState(['all']);
  const [filtersDraft, setFiltersDraft] = useState(['all']);
  const [deviceId, setDeviceId] = useState(null);
  const classes = useStyles();
  const history = useHistory();
  const searchTerm = useDebounce(searchValue, 500);
  const groupSearchTerm = useDebounce(groupFilterSearchValue, 500);

  const getStatusValue = () => {
    if (filtersValue.includes('status-ON') && filtersValue.includes('status-OFF')) {
      return ['on', 'off'];
    } else if (filtersValue.includes('status-ON')) {
      return ['on'];
    } else if (filtersValue.includes('status-OFF')) {
      return ['off'];
    } else {
      return [];
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
    if (selectedGroup) {
      finalSearchCriteria.push({
        criteriaName: 'groupName',
        value: `${selectedGroup}`,
      });
    }
    if (filtersValue.includes('status-ON')) {
      finalSearchCriteria.push({
        criteriaName: 'status',
        value: getStatusValue(),
      });
    }
    if (filtersValue.includes('status-OFF')) {
      finalSearchCriteria.push({
        criteriaName: 'status',
        value: getStatusValue(),
      });
    }
    if (filtersValue.includes('isApproved-false')) {
      finalSearchCriteria.push({
        criteriaName: 'isApproved',
        value: `false`,
      });
    }
    if (filtersValue.includes('isApproved-true')) {
      finalSearchCriteria.push({
        criteriaName: 'isApproved',
        value: `true`,
      });
    }
    return finalSearchCriteria;
  }, [searchTerm, selectedBusiness, selectedGroup, filtersValue]);

  const getGroupSearchCriteria = useCallback(() => {
    const finalSearchCriteria = [];
    setSelectedGroup('');
    if (groupSearchTerm) {
      finalSearchCriteria.push({
        criteriaName: 'name',
        value: groupSearchTerm,
      });
    }
    if (selectedBusiness) {
      finalSearchCriteria.push({
        criteriaName: 'clientId',
        value: `${selectedBusiness}`,
      });
    }
    return finalSearchCriteria;
  }, [groupSearchTerm, selectedBusiness]);

  const fetchDeviceGroups = useCallback(async () => {
    const { fetchAllDeviceGroups } = DeviceServices;
    const postBody = {
      searchCriterias: getGroupSearchCriteria(),
      pageRequest: {
        page: 0,
        size: 1000,
      },
    };
    setDeviceGroupFilterList(
      convertIntoDeviceGroupDropDown(await fetchAllDeviceGroups(postBody, userDispatch)),
    );
  }, [userDispatch, getGroupSearchCriteria]);

  useEffect(() => {
    let filtersCondition = getBusinessSelectionAccess(roles)
      ? getSearchCriteria().length > 1
      : getSearchCriteria().length > 0;
    if (!filtersCondition && !deviceList.length) {
      userDispatch({ type: actions.GLOBAL_FILTER_HIDE });
    } else {
      userDispatch({ type: actions.GLOBAL_FILTER_SHOW });
    }
  }, [getSearchCriteria, userDispatch, deviceList, roles]);

  const getValidSortObj = useCallback(() => {
    if (sortValue === 'ASC') {
      return { sort: 'ASC', orderBy: 'deviceName' };
    } else if (sortValue === 'DESC') {
      return { sort: 'DESC', orderBy: 'deviceName' };
    } else if (sortValue === 'createdAt') {
      return { sort: 'DESC', orderBy: 'createdAt' };
    } else if (sortValue === 'updatedAt') {
      return { sort: 'DESC', orderBy: 'updatedAt' };
    } else {
      return { sort: 'ASC', orderBy: 'deviceName' };
    }
  }, [sortValue]);

  const fetchDeviceList = useCallback(async () => {
    const { fetchDeviceList } = DeviceServices;
    const postBody = {
      searchCriterias: getSearchCriteria(),
      pageRequest: {
        page: 0,
        size: 1000,
        ...getValidSortObj(sortValue),
      },
    };
    setDeviceList(await fetchDeviceList({ postBody, dispatch: userDispatch }));
  }, [getSearchCriteria, userDispatch, sortValue, getValidSortObj]);

  useEffect(() => {
    let fetchCondition = getBusinessSelectionAccess(roles) ? selectedBusiness : true;
    if (fetchCondition) {
      fetchDeviceGroups();
    }
  }, [fetchDeviceGroups, selectedBusiness, roles]);

  useEffect(() => {
    let fetchCondition = getBusinessSelectionAccess(roles) ? selectedBusiness : true;
    if (fetchCondition) {
      fetchDeviceList();
    }
  }, [fetchDeviceList, selectedBusiness, roles]);

  useEffect(() => {
    if (
      history.location.pathname === '/displays' ||
      history.location.pathname === '/displays/settings' ||
      history.location.pathname === '/displays/add-new-display'
    ) {
      themeDispatch({ type: actions.SET_COMPONENT_RENDER, payload: true });
    } else {
      themeDispatch({ type: actions.SET_COMPONENT_RENDER, payload: false });
    }
  }, [history.location.pathname, themeDispatch]);

  const handleSearchClear = () => {
    setSearchValue('');
  };

  const handleRemoveFilter = (el) => {
    const filtersValueCopy = Array.from(filtersValue);
    filtersValueCopy.splice(filtersValueCopy.indexOf(el.value), 1);
    if (filtersValueCopy.length) {
      setFiltersValue(filtersValueCopy);
      setFiltersDraft(filtersValueCopy);
    } else {
      setFiltersValue(['all']);
      setFiltersDraft(['all']);
    }
  };

  const handleFilterApply = () => {
    setFiltersValue(filtersDraft);
  };

  const getFiltersValue = () => {
    let filterValue = [];
    if (!filtersDraft.includes('all')) {
      filterValue = filtersDraft;
    } else {
      filterValue = ['all'];
    }
    return filterValue;
  };

  const handleClose = () => {
    history.push('/displays');
    fetchDeviceList();
    setDeviceId(null);
  };

  const filtersCondition = useMemo(() => {
    return getBusinessSelectionAccess(roles)
      ? getSearchCriteria().length > 1
      : getSearchCriteria().length > 0;
  }, [getSearchCriteria, roles]);

  const cardsContainer =
    deviceList.length > 0 ? (
      deviceList.map((e, i) =>
        viewToggle === 'grid' ? (
          <Grid item>
            <DeviceGrid active {...e} index={i} dispatch={dispatch} setDeviceId={setDeviceId} />
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <DeviceList {...e} index={i} dispatch={dispatch} setDeviceId={setDeviceId} />
          </Grid>
        ),
      )
    ) : (
      <NoDataFound
        title="Get started by adding your first display!"
        btnTitle="Add New Display"
        handleClick={() => history.push('/displays/add-new-display')}
        isNoDataFound={filtersCondition && !deviceList.length}
      />
    );

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
          <Grid container>
            <BasicActions
              actionBtnLabel={'Add New Display'}
              searchLabel={'Search display'}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={() => {
                history.push('/displays/add-new-display');
              }}
              onToggle={(value) => setViewToggle(value)}
              toggleValue={viewToggle}
              theme={theme}
              showViewToggler
              handleSearchClear={handleSearchClear}
              searchTerm={searchValue}
              showBusinessSelection
              selectedBusiness={selectedBusiness}
              filterByAllCheckLabel={'All Displays'}
              filterByTitle="View Group"
              filterTitle="Filters"
              handleFilterByAction1={() => history.push('/displays/groups/add-edit')}
              handleFilterByAction2={() => history.push('/displays/groups')}
              showFilterBy
              filterByList={deviceGroupFilterList}
              filterByActionBtnLabel1={'Create New Group'}
              filterByActionBtnLabel2={'Manage Group'}
              handleFilterByChange={(e) => {
                setSelectedGroup(e.target.value);
              }}
              handleFilterBySelectAll={() => setSelectedGroup('')}
              showFilter
              filterByValue={selectedGroup}
              filterBySearchValue={groupFilterSearchValue}
              handleListSearch={(e) => setGroupFilterSearchValue(e.target.value)}
              handleSort={(e) => setSortValue(e.target.value)}
              filterCheckAllTitle={'Show All Displays'}
              sortValue={sortValue}
              filterList={filters}
              handleFilterChange={(value) => setFiltersDraft(value)}
              filterValue={getFiltersValue()}
              handleRemoveFilter={handleRemoveFilter}
              handleFilterApply={handleFilterApply}
            />

            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.cardsContainer}>
              <Grid container className={classes.cardsHolder} spacing={3}>
                {globalLoader ? '' : cardsContainer}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <DeviceSettings
          theme={theme}
          deviceDispatch={dispatch}
          handleRedirectBack={handleClose}
          deviceId={deviceId}
        />
        <AddDevice theme={theme} dispatch={dispatch} handleRedirectBack={handleClose} />
        <ExecutionStatus />
        <DeviceLogs />
      </Grid>
    </>
  );
}

export default React.memo(DeviceContainer);
