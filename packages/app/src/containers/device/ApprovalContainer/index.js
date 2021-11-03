import React, { useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import useStyles from './index.styles';
import { useHistory } from 'react-router';
import DeleteIcon from '@material-ui/icons/Delete';
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
import { SSConfirmationDialog } from '@ss/ui-components';
import { confirmationDialogTheme } from 'themes/confirmationDialog.theme';
import { buttonTheme } from 'themes/button.theme';
import { getBusinessSelectionAccess } from 'utils/helpers/permissions';

const filters = [
  { value: 'status-ON', label: 'Status ON' },
  { value: 'status-OFF', label: 'Status OFF' },
];

function ApprovalDeviceContainer() {
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const { userState, userDispatch } = useContext(UserContext);
  const { globalLoader, selectedBusiness, roles } = userState;
  const { theme } = themeState;
  const [dispatch] = useReducer(deviceReducer, deviceStore);
  const [viewToggle, setViewToggle] = useState('grid'); //Flag to set the view type
  const [deviceList, setDeviceList] = useState([]);
  const [sortValue, setSortValue] = useState('ASC');
  const [searchValue, setSearchValue] = useState('');
  const [filtersValue, setFiltersValue] = useState(['all']);
  const [filtersDraft, setFiltersDraft] = useState(['all']);
  const [showConformationPopup, setShowConfirmationPopup] = useState(false);
  const [displayToRejectId, setDisplayToRejectId] = useState(null);
  const classes = useStyles();
  const history = useHistory();
  const searchTerm = useDebounce(searchValue, 500);

  const handleClosePopup = () => setShowConfirmationPopup(false);
  const handleApproveDisplay = async (id) => {
    const { approveDevice } = DeviceServices;
    const result = await approveDevice({
      deviceId: id,
      dispatch: userDispatch,
      handleClose: handleClosePopup,
    });
    if (result) {
      fetchDeviceList();
    }
  };

  const handleRejectDisplay = async () => {
    const { rejectDevice } = DeviceServices;
    if (displayToRejectId) {
      const result = await rejectDevice({
        deviceId: displayToRejectId,
        dispatch: userDispatch,
        handleClose: handleClosePopup,
      });
      if (result) {
        fetchDeviceList();
      }
    }
  };

  const handleOpenPopup = (id) => {
    setShowConfirmationPopup(true);
    setDisplayToRejectId(id);
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
  }, [searchTerm, selectedBusiness, filtersValue]);

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

  useEffect(() => {
    if (!(getSearchCriteria().length > 1) && !deviceList.length) {
      userDispatch({ type: actions.GLOBAL_FILTER_HIDE });
    } else {
      userDispatch({ type: actions.GLOBAL_FILTER_SHOW });
    }
  }, [getSearchCriteria, userDispatch, deviceList]);

  const fetchDeviceList = useCallback(async () => {
    const { fetchUnApprovedDeviceList } = DeviceServices;
    const postBody = {
      searchCriterias: getSearchCriteria(),
      pageRequest: {
        page: 0,
        size: 1000,
        ...getValidSortObj(sortValue),
      },
    };
    setDeviceList(await fetchUnApprovedDeviceList({ postBody, dispatch: userDispatch }));
  }, [getSearchCriteria, userDispatch, sortValue, getValidSortObj]);

  useEffect(() => {
    fetchDeviceList();
  }, [fetchDeviceList]);

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
            <DeviceGrid
              active
              {...e}
              showApprovalActions
              deviceApprovalStatus="PENDING"
              deviceApprovalStatusFlag={false}
              handleReject={() => handleOpenPopup(e.deviceId)}
              handleApprove={() => handleApproveDisplay(e.deviceId)}
              showClientInfo
            />
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <DeviceList
              {...e}
              showApprovalActions
              showStatus={false}
              handleReject={() => handleOpenPopup(e.deviceId)}
              handleApprove={() => handleApproveDisplay(e.deviceId)}
              showClientInfo
            />
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
              filterTitle="Filters"
              showFilter
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
        <DeviceSettings theme={theme} deviceDispatch={dispatch} />
        <AddDevice theme={theme} dispatch={dispatch} />
        <SSConfirmationDialog
          open={showConformationPopup}
          {...confirmationDialogTheme('dark').secondary}
          buttonPrimaryTheme={{ ...buttonTheme('dark').primary, fontSize: '12px' }}
          buttonSecondaryTheme={{ ...buttonTheme('dark').secondary, fontSize: '12px' }}
          content="Do you really want to reject this display request?"
          title="Reject Display Request"
          primaryBtnLabel={
            <Grid container spacing={1} alignItems="center">
              <Grid item style={{ alignSelf: 'center' }}>
                <DeleteIcon style={{ color: 'inherit', fontSize: '12px', margin: '5px 0 0 0' }} />
              </Grid>
              <Grid item>Yes, Reject</Grid>
            </Grid>
          }
          secondaryBtnLabel="Cancel"
          handleSave={handleRejectDisplay}
          handleCancel={handleClosePopup}
        />
      </Grid>
    </>
  );
}

export default React.memo(ApprovalDeviceContainer);
