import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './index.styles';
import Divider from '../Divider';
import Typography from '../Typography';
import Button from '../Button';
import SearchBox from '../Search';
import Radio from '../Radio';

const GroupDropdown = React.forwardRef((props, ref) => {
  const {
    list,
    handleChange,
    id,
    value,
    popupBackground,
    popupBorderColor,
    error,
    errorMessage,
    RadioStyle,
    buttonStyle,
    typographyStyle,
    dividerStyle,
    title,
    handleAction1,
    handleAction2,
    inputStyle,
    showSearch,
    showActions,
    CustomActionPanel,
    CustomSearchComponent,
    actionBtn1Label,
    actionBtn2Label,
    searchPlaceHolder,
    searchStyle,
    onSearch,
    searchValue,
    showSelected,
    disabled,
  } = props;

  const propsContainer = {
    ...props,
    margin: '0px',
  };

  const classes = useStyles(propsContainer);
  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: popupBackground,
        borderRadius: '3px',
        borderColor: popupBorderColor,
        borderWidth: '1px',
        padding: '0',
        width: 'auto',
        minWidth: '336px',
      },
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  const menuItems = list.map((el) => (
    <MenuItem classes={{ root: classes.menuRoot, selected: classes.menuSelected }} value={el.value}>
      <Radio value={el.value} checked={el.value === value} {...RadioStyle} />
      {el.label}
    </MenuItem>
  ));

  const searchBox = showSearch
    ? CustomSearchComponent || (
        <SearchBox
          label=""
          placeholder={searchPlaceHolder}
          onBlur={() => {}}
          onChange={onSearch}
          value={searchValue}
          {...inputStyle}
          {...searchStyle}
        />
      )
    : '';

  const actionPanel = showActions
    ? CustomActionPanel || (
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Divider {...dividerStyle} />
          </Grid>
          <Grid item>
            <Grid container style={{ padding: '0 18px 20px' }} spacing={1} wrap="nowrap">
              <Grid item>
                <Button {...buttonStyle} onClick={handleAction1}>
                  <AddIcon style={{ fontSize: '12px', margin: '0 10px 0 0' }} />
                  {actionBtn1Label}
                </Button>
              </Grid>
              <Grid item>
                <Button {...buttonStyle} onClick={handleAction2}>
                  {actionBtn2Label}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )
    : '';

  const getFilterLabel = (filterList, selected) => {
    const filteredList = filterList.filter((el) => el.value === selected);

    return filteredList.length ? filteredList[0].label : title;
  };

  return (
    <FormControl classes={{ root: classes.formControl }} error={error} disabled={disabled}>
      <InputLabel
        classes={{ root: classes.labelRoot, focused: classes.labelFocused }}
        shrink
        id={id}
      />
      <Select
        ref={ref}
        MenuProps={MenuProps}
        displayEmpty
        labelId={id}
        id={id}
        value={value}
        renderValue={(selected) => (showSelected ? getFilterLabel(list, selected) : title)}
        classes={{
          icon: classes.icon,
          select: classes.select,
          selectMenu: classes.selectMenu,
          root: classes.root,
        }}
        IconComponent={ExpandMoreIcon}
        disableUnderline
        onChange={handleChange}>
        {searchBox}
        <Typography label={title} {...typographyStyle} />
        {menuItems}

        {actionPanel}
      </Select>
      {error ? <FormHelperText>{errorMessage}</FormHelperText> : ''}
    </FormControl>
  );
});

GroupDropdown.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      value: '',
      label: '',
    }),
  ),
  label: PropTypes.string,
  error: PropTypes.bool,
  handleChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  popupBackground: PropTypes.string,
  popupBorderColor: PropTypes.string,
  errorMessage: PropTypes.string,
  showLabel: PropTypes.bool,
  RadioStyle: PropTypes.objectOf(PropTypes.object),
  buttonStyle: PropTypes.objectOf(PropTypes.object),
  typographyStyle: PropTypes.objectOf(PropTypes.object),
  dividerStyle: PropTypes.objectOf(PropTypes.object),
  buttonLabel: PropTypes.string,
  title: PropTypes.string,
  allCheckLabel: PropTypes.string,
  handleClick: PropTypes.func,
  inputStyle: PropTypes.objectOf(PropTypes.object),
  handleAction1: PropTypes.func,
  handleAction2: PropTypes.func,
  showSearch: PropTypes.bool,
  showActions: PropTypes.bool,
  CustomActionPanel: PropTypes.node,
  CustomSearchComponent: PropTypes.node,
  actionBtn1Label: PropTypes.string,
  actionBtn2Label: PropTypes.string,
  searchPlaceHolder: PropTypes.string,
  searchStyle: PropTypes.objectOf(PropTypes.object),
  onSearch: PropTypes.func,
  searchValue: PropTypes.string,
  showSelected: PropTypes.bool,
  disabled: PropTypes.bool,
};

GroupDropdown.defaultProps = {
  error: false,
  list: [],
  handleChange: () => {},
  value: '',
  popupBackground: '',
  popupBorderColor: '',
  errorMessage: '',
  label: 'DropDown',
  showLabel: 'true',
  RadioStyle: {},
  buttonStyle: {},
  typographyStyle: {},
  dividerStyle: {},
  buttonLabel: 'Apply',
  title: 'Filters',
  allCheckLabel: 'Show all',
  handleClick: () => {},
  inputStyle: {},
  handleAction1: () => {},
  handleAction2: () => {},
  showSearch: true,
  showActions: true,
  CustomActionPanel: null,
  CustomSearchComponent: null,
  actionBtn1Label: 'Manage Groups',
  actionBtn2Label: 'Create Groups',
  searchPlaceHolder: 'Search Groups',
  searchStyle: {},
  onSearch: () => {},
  searchValue: '',
  showSelected: false,
  disabled: false,
};

export default GroupDropdown;
