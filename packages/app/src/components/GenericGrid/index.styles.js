import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cardsContainer: {
    width: '370px',
    maxWidth: '370px',
    height: '370px',
    maxHeight: '370px',
    margin: (props) => ((props.index + 1) % 3 === 0 ? '0 0 30px 0px' : '0 28px 30px 0'),
    '@media (max-width: 1295px)': {
      margin: '0px 30px 30px 0',
    },
    '@media (max-width: 1024px) and (min-height: 768px)': {
      margin: '0px 25px 30px 0 !important',
      minWidth: '370px',
    },
    '@media (max-width: 768px)': {
      width: '93%',
      margin: '0px 25px 30px 0 !important',
      minWidth: '370px',
    },
  },
});

export default useStyles;
