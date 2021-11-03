import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: (props) => props.width,
    maxWidth: (props) => props.maxWidth,
    minWidth: (props) => props.minWidth,
    height: (props) => props.height,
    minHeight: (props) => props.minHeight,
    maxHeight: (props) => props.maxHeight,
    background: (props) => props.background,
    borderRadius: (props) => props.borderRadius,
    color: (props) => props.color,
    padding: (props) => props.padding,
    margin: (props) => props.margin,
  },
});

export default useStyles;
