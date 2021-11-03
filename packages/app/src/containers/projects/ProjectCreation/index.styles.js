import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '1175px',
    maxWidth: '1175px',
    padding: '20px 0',
    '@media (max-width: 1024px) and (min-height: 768px)': {
      width: '85%',
    },
    '@media (max-width: 768px)': {
      width: '80%',
    },
  },
});

export default useStyles;
