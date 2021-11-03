const { makeStyles } = require('@material-ui/core');

const useStyles = makeStyles({
  container: {
    position: 'relative',
    width: '370px',
    height: '180px',
  },
  contentContainer: {
    height: '100%',
    padding: '20px',
  },
  content: {
    margin: '0 0 56px 0',
  },
  avatar: {
    width: '100px',
    height: '100px',
    position: 'absolute',
    top: '13px',
    left: '35px',
  },
});

export default useStyles;
