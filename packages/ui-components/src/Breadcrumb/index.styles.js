import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    color: (props) => props.color,
    fontSize: (props) => props.fontSize,
  },
  separator: {
    color: (props) => props.color,
  },
});

export default useStyles;
