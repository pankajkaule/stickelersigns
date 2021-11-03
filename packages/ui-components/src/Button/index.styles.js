import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: (props) => props.padding,
    fill: (props) => props.color,
    borderRadius: (props) => props.borderRadius,
    background: (props) => props.backgroundColor,
    color: (props) => props.color,
    border: (props) => props.border,
    height: (props) => props.height,
    fontSize: (props) => props.fontSize,
    fontFamily: (props) => props.fontFamily,
    lineHeight: (props) => props.lineHeight,
    width: (props) => props.width,
    minWidth: (props) => props.minWidth,
    textTransform: 'initial',
    margin: (props) => props.margin,
    transition: 'opacity .5s ease-in-out',
    opacity: '0.8',
    '& > .MuiButton-label': {
      width: 'inherit',
    },
    '&:disabled': {
      color: (props) => props.disabledColor,
      background: (props) => props.disabledBgColor,
      border: (props) => props.disabledBorder,
    },
    '&:hover': {
      background: (props) => props.onHoverBgColor,
      color: (props) => props.onHoverColor,
      fill: (props) => props.onHoverColor,
      border: (props) => props.onHoverBorder,
      opacity: '1',
    },
    '&:active': {
      background: (props) => props.onFocusBgColor,
      color: (props) => props.onFocusColor,
      fill: (props) => props.onFocusColor,
      border: (props) => props.onFocusBorder,
      opacity: 1,
    },
  },
});

export default useStyles;
