import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  labelRoot: {
    color: (props) => props.labelColor,
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '16px',
    transform: 'translate(0, -2.5px) scale(1)',
    '&.Mui-error': {
      color: (props) => props.labelColor,
    },
    '&.MuiFormLabel-root.Mui-disabled': {
      color: (props) => props.labelColor,
    },
    '& + .MuiInput-formControl': {
      marginTop: (props) => props.margin,
      height: (props) => props.height,
      width: (props) => props.width,
      '&.Mui-error > div': {
        border: '1px solid #FF003E !important',
      },
      '& .MuiInputBase-input': {
        color: (props) => props.selectedValueColor,
      },
    },
  },
  labelFocused: {
    color: (props) => `${props.labelColor} !important`,
  },
  icon: {
    color: (props) => props.iconColor,
    fontSize: '12px',
    margin: '5px',
  },
  menuSelected: {
    color: (props) => props.selectedMenuColor,
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '20px',
    background: (props) => `${props.dropdownBackground} !important`,
    height: '44px',
  },
  menuRoot: {
    color: (props) => props.menuColor,
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '20px',
    height: '44px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      background: (props) => `${props.menuHoverBackground} !important`,
    },
  },
  select: {
    color: (props) => props.menuColor,
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '20px',
    background: (props) => `${props.dropdownBackground} !important`,
    padding: '10px',
    borderRadius: '5px !important',
    '&.MuiInputBase-input.Mui-disabled': {
      color: (props) => `${props.disabledColor} !important`,
      background: (props) => `${props.disabledBgColor} !important`,
      border: (props) => `${props.disabledBorder} !important`,
    },
  },
  selectMenu: {
    borderRadius: '5px !important',
  },
});

export default useStyles;
