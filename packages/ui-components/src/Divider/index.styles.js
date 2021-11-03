import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  divider: {
    backgroundColor: (props) => props.backgroundColor,
    height: (props) => props.height,
    width: (props) => props.width,
    margin: (props) => props.margin,
    opacity: (props) => props.opacity,
    '&:hover': {
      background: 'inherit',
    },
  },
});

export default useStyles;
