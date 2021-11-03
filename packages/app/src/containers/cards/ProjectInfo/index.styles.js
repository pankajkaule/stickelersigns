import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cardsContainer: {
    width: '270px',
    maxWidth: '270px',
    height: '250px',
    maxHeight: '250px',
    margin: (props) => ((props.index + 1) % 4 === 0 ? '0 0 30px 0px' : '0 30px 30px 0'),
    '@media (max-width: 1295px)': {
      margin: '0px 20px 20px 0',
    },
    '@media (max-width: 1024px) and (min-height: 768px)': {
      margin: '0px 20px 20px 0 !important',
      minWidth: '270px',
    },
    '@media (max-width: 768px)': {
      width: '270px',
      margin: (props) =>
        (props.index + 1) % 2 === 0 ? '0 0 15px 0px !important' : '0 15px 15px 0 !important',
      minWidth: '270px',
    },
  },
});

export default useStyles;
