import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { SSButton, SSGroupDropdown } from '@ss/ui-components';
import { buttonTheme } from 'themes/button.theme';
import dropdownTheme from 'themes/dropdown.theme';
import themeConstants from 'themes/constants';
import AddIcon from 'components/icons/Add';

function GroupFilter(props) {
  const {
    handleSelectAll,
    theme = 'dark',
    value,
    allLabel,
    title,
    onSearch,
    searchValue,
    handleChange,
    list,
    actionBtn1Label,
    actionBtn2Label,
    placeholder,
    handleActionBtn1,
    handleActionBtn2,
    showFilter,
    showActions,
  } = props;
  console.log('searchValue:', searchValue);
  return list.length ? (
    <Grid item>
      <Grid container spacing={2}>
        <Grid item>
          <SSButton
            onClick={handleSelectAll}
            {...(value === '' ? buttonTheme(theme).active : buttonTheme(theme).inActive)}>
            {allLabel}
          </SSButton>
        </Grid>
        <Grid item>
          <SSGroupDropdown
            allCheckLabel={allLabel}
            title={title}
            onSearch={onSearch}
            value={value}
            searchValue={searchValue}
            handleChange={handleChange}
            list={list}
            actionBtn1Label={actionBtn1Label}
            actionBtn2Label={actionBtn2Label}
            searchPlaceHolder={placeholder}
            handleAction1={handleActionBtn1}
            handleAction2={handleActionBtn2}
            showSelected
            showActions={showActions}
            {...dropdownTheme(theme).group}
            selectedValueColor={
              value ? themeConstants[theme].colorPeacockBlue : themeConstants[theme].colorLightGrey
            }
            iconColor={
              value ? themeConstants[theme].colorPeacockBlue : themeConstants[theme].colorLightGrey
            }
          />
        </Grid>
      </Grid>
    </Grid>
  ) : showFilter ? (
    <Grid item xs={12} sm={12} md={3} lg={3}>
      <Grid container justify="flex-end">
        <Grid item>
          <SSButton onClick={handleActionBtn1} {...buttonTheme(theme).primary}>
            <Grid container alignItems="center">
              <Grid item style={{ margin: '0 10px 0 0' }}>
                <AddIcon />
              </Grid>
              <Grid item>{actionBtn1Label}</Grid>
            </Grid>
          </SSButton>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    ''
  );
}

GroupFilter.propTypes = {
  handleSelectAll: PropTypes.func,
  theme: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  allLabel: PropTypes.string,
  title: PropTypes.string,
  onSearch: PropTypes.func,
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
  actionBtn1Label: PropTypes.string,
  actionBtn2Label: PropTypes.string,
  placeholder: PropTypes.string,
  handleActionBtn1: PropTypes.func,
  handleActionBtn2: PropTypes.func,
  showFilter: PropTypes.bool,
  showActions: PropTypes.bool,
};

GroupFilter.defaultProps = {
  handleSelectAll: () => {},
  theme: 'dark',
  value: [],
  allLabel: '',
  title: '',
  onSearch: () => {},
  searchValue: '',
  handleChange: () => {},
  list: [],
  actionBtn1Label: '',
  actionBtn2Label: '',
  placeholder: '',
  handleActionBtn1: () => {},
  handleActionBtn2: () => {},
  showFilter: false,
  showActions: true,
};

export default GroupFilter;
