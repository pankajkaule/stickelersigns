import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: (props) => props.background,
    color: (props) => props.color,
    padding: (props) => props.padding,
    width: (props) => props.width,
    height: (props) => props.height,
  },
});

export default useStyles;
