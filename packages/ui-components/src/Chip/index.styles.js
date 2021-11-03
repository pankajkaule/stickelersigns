import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    color: (props) => props.color,
    background: (props) => props.background,
    border: (props) => props.border,
    borderRadius: (props) => props.borderRadius,
    fontSize: (props) => props.fontSize,
    lineHeight: (props) => props.lineHeight,
    fontFamily: (props) => props.fontFamily,
    '&:focus': {
      backgroundColor: (props) => props.onFocusBGColor,
    },
    '& > .MuiChip-label': {
      padding: (props) => props.labelPadding,
    },
    '& > .MuiChip-deleteIcon': {
      color: (props) => props.deleteIconColor,
      width: (props) => props.deleteIconWidth,
      height: (props) => props.deleteIconHeight,
      padding: (props) => props.deleteIconPadding,
      margin: (props) => props.deleteIconMargin,
    },
  },
});

export default useStyles;
