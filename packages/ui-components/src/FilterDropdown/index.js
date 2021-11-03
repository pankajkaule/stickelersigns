import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import Checkbox from '../Checkbox';
import useStyles from './index.styles';
import Divider from '../Divider';
import Typography from '../Typography';
import Button from '../Button';

const FilterDropdown = React.forwardRef((props, ref) => {
  const {
    list,
    handleChange,
    id,
    value,
    popupBackground,
    popupBorderColor,
    error,
    errorMessage,
    checkboxStyle,
    buttonStyle,
    typographyStyle,
    dividerStyle,
    buttonLabel,
    title,
    allCheckLabel,
    handleApply,
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
        width: '295px',
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
          handleChange(['all']);
        } else {
          handleChange(ifAllPresent(e.target.value));
        }
      } else {
        handleChange(e.target.value);
      }
    }
  };
  const menuItems = list.map((el) => (
    <MenuItem classes={{ root: classes.menuRoot, selected: classes.menuSelected }} value={el.value}>
      <Checkbox value={value.indexOf(el.value) > -1} {...checkboxStyle} />
      {el.label}
    </MenuItem>
  ));

  const dividers = list.length ? <Divider {...dividerStyle} /> : '';

  return (
    <FormControl classes={{ root: classes.formControl }} error={error}>
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
        multiple
        id={id}
        value={value}
        renderValue={() => title}
        classes={{
          icon: classes.icon,
          select: classes.select,
          selectMenu: classes.selectMenu,
          root: classes.root,
        }}
        IconComponent={ExpandMoreIcon}
        disableUnderline
        onChange={onChange}>
        <Typography label={title} {...typographyStyle} />
        <MenuItem classes={{ root: classes.menuRoot, selected: classes.menuSelected }} value="all">
          <Checkbox value={value.indexOf('all') > -1} {...checkboxStyle} />
          {allCheckLabel}
        </MenuItem>
        {dividers}
        {menuItems}
        {dividers}
        <Grid container justifyContent="flex-end" style={{ width: 'calc(100% - 17px)' }}>
          <Grid item>
            <Button {...buttonStyle} onClick={handleApply}>
              <CheckIcon style={{ fontSize: '12px', margin: '0 10px 0 0' }} />
              {buttonLabel}
            </Button>
          </Grid>
        </Grid>
      </Select>
      {error ? <FormHelperText>{errorMessage}</FormHelperText> : ''}
    </FormControl>
  );
});

FilterDropdown.propTypes = {
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
  checkboxStyle: PropTypes.objectOf(PropTypes.object),
  buttonStyle: PropTypes.objectOf(PropTypes.object),
  typographyStyle: PropTypes.objectOf(PropTypes.object),
  dividerStyle: PropTypes.objectOf(PropTypes.object),
  buttonLabel: PropTypes.string,
  title: PropTypes.string,
  allCheckLabel: PropTypes.string,
  handleApply: PropTypes.func,
};

FilterDropdown.defaultProps = {
  error: false,
  list: [],
  handleChange: () => {},
  value: '',
  popupBackground: '',
  popupBorderColor: '',
  errorMessage: '',
  label: 'FilterDropdown',
  showLabel: 'true',
  checkboxStyle: {},
  buttonStyle: {},
  typographyStyle: {},
  dividerStyle: {},
  buttonLabel: 'Apply',
  title: 'Filters',
  allCheckLabel: 'Show all',
  handleApply: () => {},
};

export default FilterDropdown;
