import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Grid, MenuItem, Select as MUISelect, Checkbox } from '@material-ui/core';
import useStyles, { chipStyle, dividerStyle } from './index.styles';
import Chip from '../Chip';
import Typography from '../Typography/index';
import Divider from '../Divider/index';

function Select(props) {
  const {
    list,
    value,
    defaultValue,
    handleSelect,
    multiple = false,
    isValueContainerVisible = false,
    label,
    onDelete,
    showCheckbox,
    showTitle,
    showPrimary,
    showAction,
    showPrimaryLabel,
    showSecondaryLabel,
    selectedList,
    menuPopupBgColor,
    menuPopupMargin,
    menuPopupBorderRadius,
    labelColor,
    name,
  } = props;

  const classes = useStyles(props);
  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: menuPopupBgColor,
        margin: menuPopupMargin,
        borderRadius: menuPopupBorderRadius,
        width: '297px',
        padding: '0',
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

  const ifAllPresent = (val) => val.filter((item) => item !== 'all');

  const onChange = (e, child) => {
    if (child.props.value !== undefined) {
      if (e.target.value.includes('all')) {
        if (child.props.value === 'all') {
          handleSelect(['all']);
        } else {
          handleSelect(ifAllPresent(e.target.value));
        }
      } else {
        handleSelect(e);
      }
    }
  };

  const valueContainer =
    isValueContainerVisible && ifAllPresent(value).length > 1 ? (
      <Grid item className={classes.valueContainer}>
        {selectedList.map((item) => (
          <Chip
            {...chipStyle}
            label={item.label}
            onDelete={() => onDelete(item.value)}
            key={item.value}
          />
        ))}
      </Grid>
    ) : (
      ''
    );

  const labelFromValue = (selected) => {
    const finalList = [];
    selected.forEach((item) => {
      list.primary.forEach((el1) => {
        if (item === el1.value) {
          finalList.push(el1.label);
        }
      });
      list.secondary.forEach((el2) => {
        if (item === el2.value) {
          finalList.push(el2.label);
        }
      });
    });
    return finalList.length > 1 ? finalList.join(', ') : finalList;
  };

  const renderValue = multiple
    ? {
        renderValue: (selected) => (showSecondaryLabel ? label : labelFromValue(selected)),
      }
    : '';

  const getCheckbox = (val) =>
    showCheckbox ? (
      <Checkbox classes={{ root: classes.checkbox }} checked={value.indexOf(val) > -1} />
    ) : (
      ''
    );

  const menuItems = list.secondary
    ? list.secondary.map((item) => (
        <MenuItem value={item.value} className={classes.menuItem} key={`item_${item.value}`}>
          {getCheckbox(item.value)}
          {item.label}
        </MenuItem>
      ))
    : '';

  const primaryContent = list.primary.length
    ? list.primary.map((item) => (
        <MenuItem value={item.value} className={classes.menuItem} key={`item_${item.value}`}>
          {getCheckbox(item.value)}
          {item.label}
        </MenuItem>
      ))
    : '';

  const handleClick = (id) => {
    console.log(id);
  };

  const actionContent = list.actions.length
    ? list.actions.map((item) => (
        <Grid item key={`item_${item.id}`}>
          <Divider {...dividerStyle} />
          {item.component(() => handleClick(item.id))}
        </Grid>
      ))
    : '';

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {showPrimaryLabel ? (
          <Typography
            color={labelColor}
            font="Typold regular"
            label={label}
            lineHeight="16px"
            margin="0 0 10px 0"
            size="12px"
            textAlign="left"
          />
        ) : (
          ''
        )}
      </Grid>
      <Grid item>
        <FormControl classes={{ root: classes.formRoot }}>
          <MUISelect
            classes={{ root: classes.root, icon: classes.icon, selectMenu: classes.selectMenu }}
            MenuProps={MenuProps}
            defaultValue={defaultValue}
            name={name}
            value={value}
            {...renderValue}
            onChange={multiple ? onChange : handleSelect}
            multiple={multiple}>
            {showTitle ? (
              <Typography
                color="rgb(126, 128, 167)"
                font="Typold Bold"
                label="Filters"
                lineHeight="25px"
                margin="0 1em"
                size="18px"
                textAlign="left"
              />
            ) : (
              ''
            )}
            {showPrimary ? primaryContent : ''}
            {showPrimary ? <Divider {...dividerStyle} /> : ''}
            {menuItems}
            {showAction ? actionContent : ''}
          </MUISelect>
        </FormControl>
      </Grid>
      {valueContainer}
    </Grid>
  );
}

Select.propTypes = {
  list: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  handleSelect: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  lineHeight: PropTypes.string,
  padding: PropTypes.string,
  menuItemColor: PropTypes.string,
  menuItemFontSize: PropTypes.string,
  menuItemFontFamily: PropTypes.string,
  menuItemLineHeight: PropTypes.string,
  menuPopupBgColor: PropTypes.string,
  menuPopupMargin: PropTypes.string,
  menuPopupBorderRadius: PropTypes.string,
  label: PropTypes.string,
  onDelete: PropTypes.func,
  showCheckbox: PropTypes.bool,
  showTitle: PropTypes.bool,
  showPrimary: PropTypes.bool,
  showAction: PropTypes.bool,
  showPrimaryLabel: PropTypes.bool,
  showSecondaryLabel: PropTypes.bool,
  selectedList: PropTypes.arrayOf(PropTypes.string),
  labelColor: PropTypes.string,
  multiple: PropTypes.bool,
  isValueContainerVisible: PropTypes.bool,
  name: PropTypes.bool,
};

Select.defaultProps = {
  list: {
    primary: [
      {
        value: '',
        label: '',
      },
    ],
    secondary: [
      {
        value: '',
        label: '',
      },
    ],
    action: [
      {
        component: <div />,
        id: '',
      },
    ],
  },
  value: '',
  defaultValue: '',
  handleSelect: () => {},
  width: '',
  height: '',
  border: '',
  background: '',
  color: '',
  fontSize: '',
  fontFamily: '',
  lineHeight: '',
  padding: '',
  menuItemColor: '',
  menuItemFontSize: '',
  menuItemFontFamily: '',
  menuItemLineHeight: '',
  menuPopupBgColor: '',
  menuPopupMargin: '',
  menuPopupBorderRadius: '',
  label: '',
  onDelete: () => {},
  showCheckbox: false,
  showTitle: false,
  showPrimary: false,
  showAction: false,
  showPrimaryLabel: false,
  showSecondaryLabel: false,
  selectedList: [],
  labelColor: '',
  multiple: false,
  isValueContainerVisible: false,
  name: '',
};

export default Select;
