import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '1175px',
    '@media (max-width: 1024px) and (min-height: 768px)': {
      width: '85%',
      maxWidth: '85%',
    },
    '@media (max-width: 768px)': {
      width: '80%',
      maxWidth: '80%',
    },
  },

  filterContainer: {
    margin: '20px 0 0 0',
  },
  filterItem: {
    margin: '0 20px 0 0',
  },
  cardsHolder: {
    margin: '28px 0 0 0',
  },
});

export default useStyles;
