import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  hover: {
    '&:hover > div > div > hr': {
      color: '#fff !important',
    },
  },
});

export default useStyles;
