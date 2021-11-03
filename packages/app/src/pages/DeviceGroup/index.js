import React, { useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import useStyles from './index.styles';
import BasicActions from 'components/BasicActions';
import { ThemeContext } from 'context/theme';
import GroupsCard from 'components/cards/DeviceGroup';
import DeviceGroupSettings from 'containers/deviceGroup/DeviceGroupSettings';
import deviceGroupStore from 'utils/stores/deviceGroup';
import deviceGroupReducer from 'utils/reducers/deviceGroupReducer';
import * as actions from 'utils/actionTypes';
import useDebounce from 'hooks/useDebounce';
import NoDataFound from 'containers/NoDataFound';
import { UserContext } from 'context/user';
import DeviceServices from 'utils/services/DeviceService';
import { getBusinessSelectionAccess } from 'utils/helpers/permissions';

function DeviceGroup() {
  const { themeDispatch } = useContext(ThemeContext);
  const { userState, userDispatch } = useContext(UserContext);
  const { globalLoader, selectedBusiness, roles } = userState;
  const [state, dispatch] = useReducer(deviceGroupReducer, deviceGroupStore);
  const [groupContainer, setGroupContainer] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('ASC');
  const classes = useStyles();
  const history = useHistory();
  const searchTerm = useDebounce(searchValue, 500);

  const getValidSortObj = useCallback(() => {
    if (sortValue === 'ASC') {
      return { sort: 'ASC', orderBy: 'deviceGroupName' };
    } else if (sortValue === 'DESC') {
      return { sort: 'DESC', orderBy: 'deviceGroupName' };
    } else if (sortValue === 'createdAt') {
      return { sort: 'DESC', orderBy: 'createdAt' };
    } else if (sortValue === 'updatedAt') {
      return { sort: 'DESC', orderBy: 'updatedAt' };
    } else {
      return { sort: 'ASC', orderBy: 'deviceGroupName' };
    }
  }, [sortValue]);

  const getGroupSearchCriteria = useCallback(() => {
    const finalSearchCriteria = [];
    if (searchTerm) {
      finalSearchCriteria.push({
        criteriaName: 'name',
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

  const fetchDeviceGroups = useCallback(async () => {
    const { fetchAllDeviceGroups } = DeviceServices;
    const postBody = {
      searchCriterias: getGroupSearchCriteria(),
      pageRequest: {
        page: 0,
        size: 1000,
        ...getValidSortObj(),
      },
    };
    setGroupContainer(await fetchAllDeviceGroups(postBody, userDispatch));
  }, [userDispatch, getGroupSearchCriteria, getValidSortObj]);

  useEffect(() => {
    let filtersCondition = getBusinessSelectionAccess(roles)
      ? getGroupSearchCriteria().length > 1
      : getGroupSearchCriteria().length > 0;
    if (!filtersCondition && !groupContainer.length) {
      userDispatch({ type: actions.GLOBAL_FILTER_HIDE });
    } else {
      userDispatch({ type: actions.GLOBAL_FILTER_SHOW });
    }
  }, [getGroupSearchCriteria, userDispatch, groupContainer, roles]);

  useEffect(() => {
    if (
      history.location.pathname === '/displays/groups' ||
      history.location.pathname === '/displays/groups/add-edit'
    ) {
      themeDispatch({ type: actions.SET_COMPONENT_RENDER, payload: true });
    } else {
      themeDispatch({ type: actions.SET_COMPONENT_RENDER, payload: false });
    }
  }, [history.location.pathname, themeDispatch]);

  useEffect(() => {
    fetchDeviceGroups();
  }, [fetchDeviceGroups]);

  const handleEdit = (id, name) => {
    history.push(`/displays/groups/add-edit?groupId=${id}&groupName=${name}`);
  };

  const handleClose = () => {
    history.push('/displays/groups');
    fetchDeviceGroups();
  };

  const filtersCondition = useMemo(() => {
    return getBusinessSelectionAccess(roles)
      ? getGroupSearchCriteria().length > 1
      : getGroupSearchCriteria().length > 0;
  }, [getGroupSearchCriteria, roles]);

  const cardsContent =
    groupContainer && groupContainer !== undefined && groupContainer.length > 0 ? (
      groupContainer.map((el, i) => <GroupsCard {...el} index={i} handleClick={handleEdit} />)
    ) : (
      <NoDataFound
        title="Create Device group by simply selecting devices and filling sone details"
        handleClick={() => history.push('/displays/groups/add-edit')}
        btnTitle={'Create Device Group'}
        isNoDataFound={filtersCondition && !groupContainer.length}
      />
    );

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
        <Grid container>
          <BasicActions
            actionBtnLabel={'Create New Group'}
            searchLabel={'Search display group'}
            onChange={(e) => setSearchValue(e.target.value)}
            onClick={() => history.push('/displays/groups/add-edit')}
            showViewToggler={false}
            searchTerm={searchValue}
            handleSearchClear={() => setSearchValue('')}
            showFilter={false}
            showBusinessSelection
            selectedBusiness={selectedBusiness}
            handleSort={(e) => setSortValue(e.target.value)}
            sortValue={sortValue}
          />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container className={classes.cardsHolder}>
              {globalLoader ? '' : cardsContent}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <DeviceGroupSettings state={state} dispatch={dispatch} handleClose={handleClose} />
    </Grid>
  );
}

export default React.memo(DeviceGroup);
