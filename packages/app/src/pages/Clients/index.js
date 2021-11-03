import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Grid } from '@material-ui/core';
import BasicActions from 'components/BasicActions';
import useStyles from './index.styles';
import GenericList from 'components/GenericList';
import GenericGrid from 'components/GenericGrid';
import NoDataFound from 'containers/NoDataFound';
import ClientStepperForm from 'containers/clients/ClientStepperForm';
import { useHistory } from 'react-router';
import ClientEdit from 'containers/clients/ClientEdit';
import ClientServices from 'utils/services/ClientService';
import {
  convertIntoClientsCardsFormat,
  convertRolesIntoDropDown,
} from 'utils/helpers/dataConverters';
import { UserContext } from 'context/user';
import useDebounce from 'hooks/useDebounce';
import { getBusinessSelectionAccess } from 'utils/helpers/permissions';
import * as actions from 'utils/actionTypes';
import UserServices from 'utils/services/UsersServices';

const filterList = [
  {
    label: 'Active',
    value: 'true',
  },
  {
    label: 'InActive',
    value: 'false',
  },
];

function Clients() {
  const { userState, userDispatch } = useContext(UserContext);
  const { roles } = userState;
  const [viewToggle, setVideToggle] = useState('grid');
  const [searchVal, setSearchVal] = useState('');
  const [clientsContainer, setClientsContainer] = useState([]);
  const [sortValue, setSortValue] = useState('ASC');
  const [filtersValue, setFiltersValue] = useState(['all']);
  const [filtersDraft, setFiltersDraft] = useState(['all']);
  const classes = useStyles();
  const history = useHistory();

  const searchTerm = useDebounce(searchVal, 500);

  const fetchUserRoles = useCallback(async () => {
    const { getRoles } = UserServices;
    const result = await getRoles(userDispatch);
    userDispatch({
      type: actions.STORE_USER_DATA,
      payload: { allRoles: convertRolesIntoDropDown(result) },
    });
  }, [userDispatch]);

  useEffect(() => {
    fetchUserRoles();
  }, [fetchUserRoles]);

  const getValidSortObj = useCallback(() => {
    if (sortValue === 'ASC') {
      return { sort: 'ASC', orderBy: 'name' };
    } else if (sortValue === 'DESC') {
      return { sort: 'DESC', orderBy: 'name' };
    } else if (sortValue === 'createdAt') {
      return { sort: 'DESC', orderBy: 'createdAt' };
    } else if (sortValue === 'updatedAt') {
      return { sort: 'DESC', orderBy: 'updatedAt' };
    } else {
      return { sort: 'ASC', orderBy: 'name' };
    }
  }, [sortValue]);

  const getSearchCriteria = useCallback(() => {
    const finalSearchCriteria = [];
    if (searchTerm) {
      finalSearchCriteria.push({
        criteriaName: 'name',
        value: searchTerm,
      });
    }
    if (filtersValue.includes('true')) {
      finalSearchCriteria.push({
        criteriaName: 'isActive',
        value: 'true',
      });
    }
    if (filtersValue.includes('false')) {
      finalSearchCriteria.push({
        criteriaName: 'isActive',
        value: 'false',
      });
    }
    return finalSearchCriteria;
  }, [searchTerm, filtersValue]);

  const fetchClientList = useCallback(async () => {
    const postBody = {
      searchCriterias: getSearchCriteria(),
      pageRequest: {
        page: 0,
        size: 1000,
        ...getValidSortObj(),
      },
    };
    const data = await ClientServices.getClientList(postBody, userDispatch);
    setClientsContainer(convertIntoClientsCardsFormat(data.data));
  }, [userDispatch, getValidSortObj, getSearchCriteria]);

  useEffect(() => {
    fetchClientList();
  }, [fetchClientList]);

  const handleEditRedirection = (id) => history.push(`/clients/edit?id=${id}`);

  const list = clientsContainer.map((el) => (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <GenericList
        {...el}
        handleSetting={handleEditRedirection}
        activeLabel="ACTIVE"
        inActiveLabel="INACTIVE"
      />
    </Grid>
  ));

  const grid = clientsContainer.map((el) => (
    <Grid item>
      <GenericGrid
        {...el}
        handleSetting={handleEditRedirection}
        activeLabel="ACTIVE"
        inActiveLabel="INACTIVE"
      />
    </Grid>
  ));

  const filtersCondition = useMemo(() => {
    return getBusinessSelectionAccess(roles)
      ? getSearchCriteria().length >= 1
      : getSearchCriteria().length > 0;
  }, [getSearchCriteria, roles]);

  const toggleContent = viewToggle === 'grid' ? grid : list;
  const noDataFound = (
    <NoDataFound
      title="All set to add your first client?"
      btnTitle="Add New Client"
      handleClick={() => history.push('/clients/new')}
      isNoDataFound={filtersCondition && !clientsContainer.length}
    />
  );

  const content = clientsContainer.length ? toggleContent : noDataFound;

  const handleCloseStepperForm = () => {
    fetchClientList();
    history.push('/clients');
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

  useEffect(() => {
    let filtersCondition = getBusinessSelectionAccess(roles)
      ? getSearchCriteria().length >= 1
      : getSearchCriteria().length > 0;
    if (!filtersCondition && !clientsContainer.length) {
      userDispatch({ type: actions.GLOBAL_FILTER_HIDE });
    } else {
      userDispatch({ type: actions.GLOBAL_FILTER_SHOW });
    }
  }, [getSearchCriteria, userDispatch, clientsContainer, roles]);

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
        <Grid container>
          <BasicActions
            actionBtnLabel={'Add New Client'}
            searchLabel={'Search Client'}
            onChange={(e) => setSearchVal(e.target.value)}
            searchTerm={searchVal}
            handleSearchClear={() => setSearchVal('')}
            onClick={() => history.push('/clients/new')}
            onToggle={(value) => setVideToggle(value)}
            toggleValue={viewToggle}
            showViewToggler
            showFilterBy={false}
            handleSort={(e) => setSortValue(e.target.value)}
            sortValue={sortValue}
            filterList={filterList}
            handleFilterChange={(value) => setFiltersDraft(value)}
            filterValue={getFiltersValue()}
            handleRemoveFilter={handleRemoveFilter}
            handleFilterApply={handleFilterApply}
          />
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.cardsContainer}>
            <Grid container className={classes.cardsHolder} spacing={3}>
              {content}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ClientStepperForm handleClose={handleCloseStepperForm} />
      <ClientEdit handleClose={handleCloseStepperForm} />
    </Grid>
  );
}

export default Clients;
