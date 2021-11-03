import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  labelRoot: {
    color: (props) => props.labelColor,
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '16px',
    '&.Mui-error': {
      color: (props) => props.labelColor,
    },
    '& + .MuiInput-formControl': {
      marginTop: (props) => props.margin,
      height: (props) => props.height,
      width: (props) => props.width,
      '&.Mui-error > div': {
        border: '1px solid #FF003E !important',
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
    color: (props) => `${props.selectedMenuColor} !important`,
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
    height: '50px',
    '&:hover': {
      background: (props) => `${props.menuHoverBackground} !important`,
    },
  },
  select: {
    color: (props) => props.menuColor,
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '16px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 10px',
    background: (props) => `${props.dropdownBackground} !important`,
    borderRadius: '5px !important',
    '&[aria-expanded="true"]': {
      backgroundColor: (props) => `${props.onActiveBackground} !important`,
      color: (props) => `${props.onActiveColor} !important`,
    },
    '&:hover': {
      background: '#2F3141 !important',
      color: '#FFFFFF !important',
      fontFamily: 'Typold Book !important',
      lineHeight: '16px !important',
    },
  },
  selectMenu: {
    borderRadius: '5px !important',
    color: (props) => `${props.selectedMenuColor} !important`,
  },
});

export default useStyles;
