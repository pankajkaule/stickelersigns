import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: (props) => props.width,
    minHeight: (props) => props.height,
    height: (props) => props.height,
    margin: (props) => props.margin,
    textAlign: 'center',
  },
});

export default useStyles;
