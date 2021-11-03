const { makeStyles } = require('@material-ui/core');

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
});

export default useStyles;
