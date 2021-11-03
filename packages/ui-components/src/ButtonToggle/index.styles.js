import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: (props) => props.btnGroupBgColor,
    width: (props) => props.width,
    height: (props) => props.height,
    borderRadius: (props) => props.borderRadius,
  },
  label: {
    color: '#fff',
  },
  groupedHorizontal: {
    '&:not(:first-child)': {
      borderRadius: (props) => props.borderRadius,
    },
    '&:not(:last-child)': {
      borderRadius: (props) => props.borderRadius,
    },
  },
});

export default useStyles;
