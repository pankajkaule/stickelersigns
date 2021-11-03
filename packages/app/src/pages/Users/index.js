import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import BasicActions from 'components/BasicActions';
import useStyles from './index.styles';
import UserProfile from 'components/cards/UserProfile';
import GenericList from 'components/GenericList';
import NoDataFound from 'containers/NoDataFound';
import UserAdd from 'containers/users/UserAdd';
import UserEditContainer from 'containers/users/UserEditContainer';
import UserServices from 'utils/services/UsersServices';
import { UserContext } from 'context/user';
import { convertIntoUsersCardsFormat } from 'utils/helpers/dataConverters';
import useDebounce from 'hooks/useDebounce';
import { getBusinessSelectionAccess } from 'utils/helpers/permissions';
import * as actions from 'utils/actionTypes';

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

function Users() {
  const { userState, userDispatch } = useContext(UserContext);
  const { selectedBusiness, roles } = userState;
  const history = useHistory();
  const [viewToggle, setVideToggle] = useState('grid');
  const [searchVal, setSearchVal] = useState('');
  const [usersContainer, setUsersContainer] = useState([]);
  const [sortValue, setSortValue] = useState('ASC');
  const [filtersValue, setFiltersValue] = useState(['all']);
  const [filtersDraft, setFiltersDraft] = useState(['all']);
  const searchTerm = useDebounce(searchVal, 500);
  const classes = useStyles();

  const getValidSortObj = useCallback(() => {
    if (sortValue === 'ASC') {
      return { sort: 'ASC', orderBy: 'userName' };
    } else if (sortValue === 'DESC') {
      return { sort: 'DESC', orderBy: 'userName' };
    } else if (sortValue === 'createdAt') {
      return { sort: 'DESC', orderBy: 'createdAt' };
    } else if (sortValue === 'updatedAt') {
      return { sort: 'DESC', orderBy: 'updatedAt' };
    } else {
      return { sort: 'ASC', orderBy: 'userName' };
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
    if (selectedBusiness) {
      finalSearchCriteria.push({
        criteriaName: 'clientId',
        value: `${selectedBusiness}`,
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
  }, [searchTerm, selectedBusiness, filtersValue]);

  const fetchUserList = useCallback(async () => {
    const postBody = {
      searchCriterias: getSearchCriteria(),
      pageRequest: {
        page: 0,
        size: 1000,
        ...getValidSortObj(),
      },
    };
    const result = await UserServices.getAllUsers({ postBody, dispatch: userDispatch });
    setUsersContainer(convertIntoUsersCardsFormat(result.data.data));
  }, [userDispatch, getSearchCriteria, getValidSortObj]);

  useEffect(() => {
    if (roles.length) {
      let fetchCondition = getBusinessSelectionAccess(roles) ? selectedBusiness : true;
      if (fetchCondition) {
        fetchUserList();
      }
    }
  }, [fetchUserList, selectedBusiness, roles]);

  const handleClose = () => {
    fetchUserList();
    history.push('/users');
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

  useEffect(() => {
    let filtersCondition = getBusinessSelectionAccess(roles)
      ? getSearchCriteria().length > 1
      : getSearchCriteria().length > 0;
    if (!filtersCondition && !usersContainer.length) {
      userDispatch({ type: actions.GLOBAL_FILTER_HIDE });
    } else {
      userDispatch({ type: actions.GLOBAL_FILTER_SHOW });
    }
  }, [getSearchCriteria, userDispatch, usersContainer, roles]);
  const getFiltersValue = () => {
    let filterValue = [];
    if (!filtersDraft.includes('all')) {
      filterValue = filtersDraft;
    } else {
      filterValue = ['all'];
    }
    return filterValue;
  };

  const list = usersContainer.map((el) => (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <GenericList
        {...el}
        activeLabel="ACTIVE"
        inActiveLabel="INACTIVE"
        handleSetting={() => history.push('users/edit')}
      />
    </Grid>
  ));

  const grid = usersContainer.map((el) => (
    <Grid item>
      <UserProfile
        {...el}
        activeLabel="ACTIVE"
        inActiveLabel="INACTIVE"
        handleSetting={(id) => history.push(`users/edit?id=${id}`)}
      />
    </Grid>
  ));

  const filtersCondition = useMemo(() => {
    return getBusinessSelectionAccess(roles)
      ? getSearchCriteria().length > 1
      : getSearchCriteria().length > 0;
  }, [getSearchCriteria, roles]);

  const toggleContent = viewToggle === 'grid' ? grid : list;
  const noDataFound = (
    <NoDataFound
      title="All set to add your first user?"
      btnTitle="Add New User"
      handleClick={() => history.push('/users/add')}
      isNoDataFound={filtersCondition && !usersContainer.length}
    />
  );
  const content = usersContainer.length ? toggleContent : noDataFound;
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
        <Grid container>
          <BasicActions
            actionBtnLabel={'Add New User'}
            searchLabel={'Search user'}
            onChange={(e) => setSearchVal(e.target.value)}
            searchTerm={searchVal}
            handleSearchClear={() => setSearchVal('')}
            onClick={() => history.push('/users/add')}
            onToggle={(value) => setVideToggle(value)}
            toggleValue={viewToggle}
            showViewToggler
            showBusinessSelection
            selectedBusiness={selectedBusiness}
            filterList={filterList}
            showFilterBy={false}
            handleSort={(e) => setSortValue(e.target.value)}
            sortValue={sortValue}
            handleFilterChange={(value) => setFiltersDraft(value)}
            filterValue={getFiltersValue()}
            handleRemoveFilter={handleRemoveFilter}
            handleFilterApply={handleFilterApply}
          />

          {/* <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '10px 0 40px' }}>
            <SSList
              width="100%"
              height="100%"
              minHeight="60px"
              maxHeight="auto"
              minWidth="100%"
              maxWidth="100%"
              background="#1B1C24"
              borderRadius="5px"
              padding="10px 10px 10px 30px">
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Grid container spacing={5} alignItems="center">
                    <Grid item>
                      <SSTypography
                        label="3 user roles are offered:"
                        {...typographyTheme('dark').infoWhite}
                      />
                    </Grid>
                    <Grid item>
                      <SSTypography label="Company Admin" {...typographyTheme('dark').roleInfo} />
                    </Grid>
                    <Grid item>
                      <SSTypography label="Auditor" {...typographyTheme('dark').roleInfo} />
                    </Grid>
                    <Grid item>
                      <SSTypography label="Designer" {...typographyTheme('dark').roleInfo} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <SSButton
                    onClick={() => {}}
                    variant="contained"
                    {...buttonTheme('dark').secondary}>
                    View Details
                  </SSButton>
                </Grid>
              </Grid>
            </SSList>
          </Grid> */}
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.cardsContainer}>
            <Grid container className={classes.cardsHolder} spacing={3}>
              {content}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <UserAdd handleClose={handleClose} selectedBusiness={selectedBusiness} />
      <UserEditContainer handleClose={handleClose} selectedBusiness={selectedBusiness} />
    </Grid>
  );
}

export default Users;
