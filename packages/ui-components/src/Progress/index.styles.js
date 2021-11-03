import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: (props) => props.height,
    borderRadius: (props) => props.borderRadius,
    margin: (props) => props.margin,
    width: (props) => props.width,
  },
  colorPrimary: { background: (props) => props.barColor },
  bar: { borderRadius: (props) => props.borderRadius, background: (props) => props.color },
});

export default useStyles;
