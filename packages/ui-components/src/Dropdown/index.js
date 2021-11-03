import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './index.styles';
import dropdownTheme from '../Themes/dropdown.theme';

const Dropdown = React.forwardRef((props, ref) => {
  const {
    list,
    handleChange,
    id,
    value,
    error,
    errorMessage,
    label,
    showLabel,
    disabled,
    useDefault,
    theme,
    variant,
  } = props;

  const propsContainer = useDefault
    ? {
        ...dropdownTheme(theme)[variant],
        margin: showLabel ? '28px' : '0px',
      }
    : {
        ...props,
        margin: showLabel ? '28px' : '0px',
      };

  const classes = useStyles(propsContainer);
  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: propsContainer.popupBackground,
        borderRadius: '3px',
        borderColor: propsContainer.popupBorderColor,
        borderWidth: '1px',
        padding: '0',
        width: useDefault ? dropdownTheme(theme)[variant].width : props.width,
        maxWidth: useDefault ? dropdownTheme(theme)[variant].width : props.width,
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
      {el.label}
    </MenuItem>
  ));

  return (
    <FormControl classes={{ root: classes.formControl }} error={error} disabled={disabled}>
      <InputLabel
        classes={{ root: classes.labelRoot, focused: classes.labelFocused }}
        shrink
        id={id}>
        {showLabel ? label : ''}
      </InputLabel>
      <Select
        ref={ref}
        MenuProps={MenuProps}
        labelId={id}
        id={id}
        value={value}
        displayEmpty
        classes={{
          icon: classes.icon,
          select: classes.select,
          selectMenu: classes.selectMenu,
          root: classes.root,
        }}
        IconComponent={ExpandMoreIcon}
        disableUnderline
        onChange={handleChange}>
        {menuItems}
      </Select>
      {error ? <FormHelperText>{errorMessage}</FormHelperText> : ''}
    </FormControl>
  );
});

Dropdown.propTypes = {
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
  errorMessage: PropTypes.string,
  showLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  useDefault: PropTypes.bool,
  theme: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
};

Dropdown.defaultProps = {
  error: false,
  list: [],
  handleChange: () => {},
  value: '',
  errorMessage: '',
  label: 'DropDown',
  showLabel: true,
  disabled: false,
  useDefault: true,
  theme: 'dark',
  variant: 'primary',
  width: '',
};

export default Dropdown;
