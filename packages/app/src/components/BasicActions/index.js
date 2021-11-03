import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import {
  SSButton,
  SSButtonToggle,
  SSDropdown,
  SSFilterDropdown,
  SSGroupDropdown,
  SSTypography,
  SSChip,
} from '@ss/ui-components';

import basicActionsTheme from './index.theme';
import AddIcon from 'components/icons/Add';
import TilesIcon from 'components/icons/Tiles';
import ListIcon from 'components/icons/List';
import dropdownTheme from 'themes/dropdown.theme';
import ClientServices from 'utils/services/ClientService';
import { UserContext } from 'context/user';
import { convertIntoClientsDropDown } from 'utils/helpers/dataConverters';
import { buttonTheme } from 'themes/button.theme';
import { getBusinessSelectionAccess } from 'utils/helpers/permissions';
import { filterDropdownTheme } from 'themes/filter.theme';
import { typographyTheme } from 'themes/typography.theme';
import { chipTheme } from 'themes/chip.theme';
import * as actions from 'utils/actionTypes';
import themeConstants from 'themes/constants';
import GroupFilter from 'components/filters/GroupFilter';
import Search from 'components/filters/Search';

const sortList = [
  {
    label: 'A-Z',
    value: 'ASC',
  },
  {
    label: 'Z-A',
    value: 'DESC',
  },
  {
    label: 'Date Added',
    value: 'createdAt',
  },
  {
    label: 'Date Modified',
    value: 'updatedAt',
  },
];

function BasicActions(props) {
  const {
    searchLabel,
    actionBtnLabel,
    onChange,
    onClick,
    onToggle,
    toggleValue,
    theme = 'dark',
    showViewToggler,
    searchTerm,
    handleSearchClear,
    showBusinessSelection,
    showFilter,
    filterList,
    filterValue,
    handleFilterChange,
    filterTitle,
    filterCheckAllTitle,
    showFilterBy,
    showSort,
    filterByList = [],
    handleFilterByChange,
    handleListSearch,
    handleSort,
    filterByAllCheckLabel,
    filterByTitle,
    filterByValue,
    filterBySearchValue,
    sortValue,
    filterBySearchPlaceholder,
    filterByActionBtnLabel2,
    filterByActionBtnLabel1,
    handleRemoveFilter,
    handleFilterByAction1,
    handleFilterByAction2,
    handleFilterBySelectAll,
    handleFilterApply,
  } = props;
  const { userState, userDispatch } = useContext(UserContext);
  const { roles, selectedBusiness, globalFilter, clientsContainer } = userState;
  // Container to store company/clients data
  // const [clientsContainer, setClientsContainer] = useState([]);
  // Flag to switch between search box view
  const [searchToggle, setSearchToggle] = useState(false);
  // Toggle list
  const list = [
    { value: 'grid', component: TilesIcon },
    { value: 'list', component: ListIcon },
  ];

  const handleClear = () => {
    setSearchToggle(false);
    handleSearchClear();
  };

  // Method to fetch clients/ company list

  const fetchClientList = useCallback(async () => {
    // if (clientsContainer.length === 0) {
    if (showBusinessSelection) {
      const { getClientList } = ClientServices;
      const postBody = {
        searchCriterias: [],
        pageRequest: {
          page: 0,
          size: 1000,
        },
      };
      const result = await getClientList(postBody, userDispatch);
      userDispatch({
        type: actions.SET_GLOBAL_CLIENT_LIST,
        payload: convertIntoClientsDropDown(result.data, false),
      });
    }
    // }
  }, [showBusinessSelection, userDispatch]);

  useEffect(() => {
    fetchClientList();
  }, [fetchClientList]);

  // User Effect to auto select first company in the company selection drop-down
  useEffect(() => {
    if (selectedBusiness !== undefined && !selectedBusiness) {
      if (showBusinessSelection && getBusinessSelectionAccess(roles) && clientsContainer.length) {
        userDispatch({
          type: actions.STORE_USER_DATA,
          payload: { selectedBusiness: clientsContainer[0].value },
        });
      }
    }
  }, [showBusinessSelection, clientsContainer, roles, userDispatch, selectedBusiness]);

  const handleBusinessSelection = (e) => {
    userDispatch({
      type: actions.STORE_USER_DATA,
      payload: { selectedBusiness: e.target.value },
    });
  };

  const toggleContent =
    showViewToggler && globalFilter ? (
      <Grid item>
        <SSButtonToggle
          showLabel={false}
          handleSelect={(name, value) => onToggle(value)}
          value={toggleValue}
          list={list}
          {...basicActionsTheme(theme).viewToggleButton}
        />
      </Grid>
    ) : (
      ''
    );

  const clientListContent =
    showBusinessSelection && getBusinessSelectionAccess(roles) ? (
      <Grid item>
        <SSDropdown
          label={'Label'}
          value={selectedBusiness}
          handleChange={handleBusinessSelection}
          list={clientsContainer}
          showLabel={false}
          {...dropdownTheme(theme).primary}
          iconColor={
            selectedBusiness
              ? themeConstants[theme].colorPeacockBlue
              : themeConstants[theme].colorWhite
          }
        />
      </Grid>
    ) : (
      ''
    );

  const searchBoxContent = globalFilter ? (
    <Search
      toggle={searchToggle}
      label={searchLabel}
      onChange={onChange}
      value={searchTerm}
      handleClear={handleClear}
      handleToggle={setSearchToggle}
      key="Global-Search"
    />
  ) : (
    ''
  );

  const actionContainerContent = searchToggle ? (
    ''
  ) : globalFilter ? (
    <Grid item xs={12} sm={12} md={3} lg={3}>
      <Grid container justify="flex-end">
        <Grid item>
          <SSButton onClick={onClick} {...buttonTheme(theme).primary}>
            <Grid container alignItems="center">
              <Grid item style={{ margin: '5px 10px 0 0' }}>
                <AddIcon />
              </Grid>
              <Grid item>{actionBtnLabel}</Grid>
            </Grid>
          </SSButton>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    ''
  );

  const filterDropDownContent =
    showFilter && globalFilter ? (
      <Grid item>
        <SSFilterDropdown
          title={filterTitle}
          allCheckLabel={filterCheckAllTitle}
          handleChange={handleFilterChange}
          list={filterList}
          value={filterValue}
          handleApply={handleFilterApply}
          buttonStyle={buttonTheme(theme).other}
          {...(filterValue.length
            ? filterDropdownTheme(theme).active
            : filterDropdownTheme(theme).primary)}
        />
      </Grid>
    ) : (
      ''
    );

  const filterByDropdownContent = globalFilter ? (
    <GroupFilter
      list={filterByList}
      value={filterByValue}
      actionBtn1Label={filterByActionBtnLabel1}
      actionBtn2Label={filterByActionBtnLabel2}
      allLabel={filterByAllCheckLabel}
      title={filterByTitle}
      placeholder={filterBySearchPlaceholder}
      handleChange={handleFilterByChange}
      handleSelectAll={handleFilterBySelectAll}
      handleActionBtn1={handleFilterByAction1}
      handleActionBtn2={handleFilterByAction2}
      onSearch={handleListSearch}
      searchValue={filterBySearchValue}
      showFilter={showFilterBy}
      key="Device-group-filter"
    />
  ) : (
    ''
  );

  const sortContent =
    showSort && globalFilter ? (
      <Grid item>
        <SSGroupDropdown
          title="SORTING"
          handleChange={handleSort}
          value={sortValue}
          list={sortList}
          showActions={false}
          showSearch={false}
          showSelected
          {...dropdownTheme(theme).sorting}
          iconColor={
            selectedBusiness
              ? themeConstants[theme].colorPeacockBlue
              : themeConstants[theme].colorWhite
          }
        />
      </Grid>
    ) : (
      ''
    );

  const filtersListContent =
    filterValue.length && !filterValue.includes('all') && globalFilter ? (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ margin: '15px 0px 20px' }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <SSTypography label="Filters:" {...typographyTheme(theme).secondary} />
          </Grid>
          {filterList.map((el) => {
            return filterValue.includes(el.value) ? (
              <Grid item>
                <SSChip
                  label={`${el.label}`}
                  onDelete={() => handleRemoveFilter(el)}
                  {...chipTheme(theme).primary}
                />
              </Grid>
            ) : (
              ''
            );
          })}
        </Grid>
      </Grid>
    ) : (
      ''
    );

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '0 0 20px' }}>
      <Grid container justify="space-between">
        <Grid item xs={12} sm={12} md={searchToggle ? 12 : 9} lg={searchToggle ? 12 : 9}>
          <Grid container alignItems="center" spacing={1}>
            {clientListContent}
            <Grid item>{searchBoxContent}</Grid>
            {toggleContent}
            {filterByDropdownContent}
            {filterDropDownContent}
            {sortContent}
          </Grid>
        </Grid>
        {actionContainerContent}
        {filtersListContent}
      </Grid>
    </Grid>
  );
}

BasicActions.propTypes = {
  searchLabel: PropTypes.string,
  actionBtnLabel: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onToggle: PropTypes.func,
  toggleValue: PropTypes.string,
  showViewToggler: PropTypes.bool,
  searchTerm: PropTypes.string,
  handleSearchClear: PropTypes.func,
  showBusinessSelection: PropTypes.bool,
  handleBusinessSelection: PropTypes.func,
  selectedBusiness: PropTypes.string,
  showFilter: PropTypes.bool,
  setSelectedBusiness: PropTypes.func,
  filterList: PropTypes.arrayOf(PropTypes.object),
  filterValue: PropTypes.string,
  handleFilterChange: PropTypes.func,
  filterTitle: PropTypes.string,
  filterCheckAllTitle: PropTypes.string,
  filterByList: PropTypes.arrayOf(PropTypes.object),
  handleFilterByChange: PropTypes.func,
  handleListSearch: PropTypes.func,
  handleSort: PropTypes.func,
  filterByAllCheckLabel: PropTypes.string,
  filterByTitle: PropTypes.string,
  showFilterBy: PropTypes.bool,
  showSort: PropTypes.bool,
  filterByValue: PropTypes.string,
  filterBySearchValue: PropTypes.string,
  sortValue: PropTypes.string,
  handleRemoveFilter: PropTypes.func,
  handleFilterByAction1: PropTypes.func,
  handleFilterByAction2: PropTypes.func,
  handleFilterBySelectAll: PropTypes.func,
  handleFilterApply: PropTypes.func,
};

BasicActions.defaultProps = {
  searchLabel: '',
  actionBtnLabel: '',
  onChange: () => {},
  onClick: () => {},
  onToggle: () => {},
  toggleValue: 'grid',
  showViewToggler: false,
  searchTerm: '',
  handleSearchClear: () => {},
  showClientList: true,
  showBusinessSelection: false,
  handleBusinessSelection: () => {},
  selectedBusiness: '',
  showFilter: true,
  setSelectedBusiness: () => {},
  filterList: [],
  filterValue: [],
  handleFilterChange: () => {},
  filterTitle: 'Filter',
  filterCheckAllTitle: 'All',
  filterByList: [],
  handleFilterByChange: () => {},
  handleListSearch: () => {},
  handleSort: () => {},
  filterByAllCheckLabel: '',
  filterByTitle: '',
  showFilterBy: false,
  showSort: true,
  filterByValue: '',
  filterBySearchValue: '',
  sortValue: '',
  handleRemoveFilter: () => {},
  handleFilterByAction1: () => {},
  handleFilterByAction2: () => {},
  handleFilterBySelectAll: () => {},
  handleFilterApply: () => {},
};

export default BasicActions;
