import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  formRoot: {
    width: (props) => props.width,
    height: (props) => props.height,
    border: (props) => props.border,
    background: (props) => props.background,
    color: (props) => props.color,
    fontSize: (props) => props.fontSize,
    fontFamily: (props) => props.fontFamily,
    lineHeight: (props) => props.lineHeight,
    borderRadius: (props) => props.borderRadius,
    '& .MuiInputBase-root': {
      border: 'none',
      width: '100%',
      height: '100%',
      color: 'inherit',
      fontSize: 'inherit',
    },
    '& .MuiInput-underline:before': {
      border: 'none',
    },
    '& .MuiInput-underline:after': {
      border: 'none',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      border: 'none',
    },
  },
  root: {
    border: 'none',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: 'inherit',
    fontSize: '16px',
    right: '11px',
    top: 'auto',
  },
  selectMenu: {
    padding: (props) => props.padding,
    width: '100%',
    height: '100%',
    color: 'inherit',
    fontSize: 'inherit',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    // margin: '0 30px 0 0',
    textOverflow: 'ellipsis',
  },
  menuItem: {
    color: (props) => props.menuItemColor,
    fontSize: (props) => props.menuItemFontSize,
    fontFamily: (props) => props.menuItemFontFamily,
    lineHeight: (props) => props.menuItemLineHeight,
    width: '100%',
    height: '44px',
    padding: '0 20px',
    '&$selected': {
      background: (props) => '#2E3036 !important',
    },
  },
  valueContainer: {
    color: (props) => props.menuItemColor,
    fontSize: (props) => props.menuItemFontSize,
    fontFamily: (props) => props.menuItemFontFamily,
    lineHeight: (props) => props.menuItemLineHeight,
    background: (props) => props.background,
    border: (props) => props.valueContainerBorder,
    height: (props) => props.valueContainerHeight,
    margin: '0 7px',
  },
  checkbox: {
    color: '#83D4FF !important',
    margin: '0 10px 0 0',
    '&$checked': {
      color: '#83D4FF !important',
    },
    checked: {
      color: '#83D4FF !important',
    },
  },
});

export default useStyles;

export const chipStyle = {
  background: 'rgba(58,88,125,0.15)',
  border: 'none',
  borderRadius: '0',
  color: '#FFFFFF',
  deleteIconColor: '#7E80A7',
  deleteIconHeight: '11px',
  deleteIconMargin: '0',
  deleteIconPadding: '0 12px 0 0',
  deleteIconWidth: '11px',
  fontFamily: 'Typold Regular',
  fontSize: '12px',
  labelPadding: '8px 23px 10px 17px',
  lineHeight: '16px',
  onFocusBGColor: 'rgba(58,88,125,0.15)',
};

export const dividerStyle = {
  backgroundColor: '#3d507c',
  height: '2px',
  margin: '18px 0px',
  width: 'auto',
};

export const buttonStyle = {
  border: 'none',
  backgroundColor: 'rgb(64, 65, 83)',
  width: '100%',
  onHoverBgColor: 'rgb(64, 65, 83)',
  disabledBgColor: '#666',
  disabledBorder: '2px solid #ccc',
  disabledColor: '#ccc',
  fontFamily: 'Typold Medium',
  fontSize: '14px',
  height: '40px',
  lineHeight: '19px',
  padding: '14px 23px 16px',
  onHoverBorder: 'none',
};
