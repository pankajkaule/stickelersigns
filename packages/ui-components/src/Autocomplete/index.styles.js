import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '& > div > label': {
      color: (props) => `${props.labelColor} !important`,
      transform: 'translate(0, -10px) scale(1)',
      fontFamily: 'Typold Regular',
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
  inputRoot: {
    color: (props) => props.inputColor,
    background: (props) => props.inputBackground,
    borderRadius: '5px',
    paddingRight: '0',
    paddingBottom: '0',
    border: '1px solid transparent',
    '&.MuiInputBase-root.Mui-disabled': {
      color: (props) => `${props.disabledColor} !important`,
      background: (props) => `${props.disabledBgColor} !important`,
      border: (props) => `${props.disabledBorder} !important`,
    },
    '&:hover': {
      color: (props) => props.inputOnHoverColor,
      background: (props) => props.inputOnHoverBackground,
      fontFamily: 'Typold Book',
    },
    '&::before': {
      border: 'none !important',
    },
    '&::after': {
      border: 'none',
    },
    '&.Mui-focused': {
      background: (props) => props.inputOnHoverBackground,
      border: (props) => `1px solid ${props.iconsColor}`,
    },
    '&.Mui-error': {
      border: '1px solid red',
      background: '#2F3142',
    },
    '&.MuiFormHelperText-root.Mui-error': {
      color: '#FF003E',
    },
  },
  input: {
    padding: '12px 15px !important',
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '16px',
    '&:focus': {
      color: (props) => props.inputOnFocusColor,
    },
  },
  endAdornment: {
    padding: '0 10px 0',
    '& > button': {
      color: (props) => `${props.iconsColor} !important`,
      fontSize: '10px',
      '&.MuiIconButton-root.Mui-disabled': {
        color: (props) => `${props.disabledColor} !important`,
      },
    },
  },
  paper: {
    background: (props) => props.paperBackground,
  },
  listBox: {
    color: (props) => props.listItemColor,
    '& >.MuiAutocomplete-option': {
      height: '50px',
      fontFamily: 'Typold Regular',
      fontSize: '14px',
      lineHeight: '19px',
    },
    '& >.MuiAutocomplete-option[data-focus="true"]': {
      background: (props) => props.listItemOnSelectBackground,
    },
    '& >.MuiAutocomplete-option[aria-selected="true"]': {
      background: (props) => props.listItemOnSelectBackground,
    },
  },
  noOptions: {
    color: (props) => props.listItemColor,
    fontFamily: 'Typold Regular',
    fontSize: '14px',
    lineHeight: '19px',
  },
});

export default useStyles;
