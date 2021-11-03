import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  deviceSummaryContainer: {
    margin: '0 34px 0 0',
    height: (props) => (props.height ? props.height : '570px'),
    width: '270px',
    maxWidth: '270px',
    minWidth: '270px',
    background: '#2E3036',
    position: 'relative',
    borderRadius: '10px',
    padding: '30px',
    clipPath: 'polygon(0 0, 100% 0%, 100% 95%, 0 100%)',
  },
});

export default useStyles;
