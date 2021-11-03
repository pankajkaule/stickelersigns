const { makeStyles } = require('@material-ui/core');

const useStyles = makeStyles({
  container: {
    background: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(5px) ',
    height: '100%',
    borderRadius: 'inherit',
    display: 'none',
    position: 'absolute',
  },
  hoverTitleContainer: {
    margin: '50px 50px 25px',
  },
  hoverActionsContainer: {
    padding: '10px 10px 0',
  },
  cardsContainer: {
    width: '170px',
    maxWidth: '170px',
    height: '170px',
    maxHeight: '170px',
    margin: '0 0 30px 0',
  },
});

export default useStyles;
