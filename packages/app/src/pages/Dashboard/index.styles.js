import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cardsContainer: {
    width: '390px',
    maxWidth: '400px',
  },
  headerContainer: {
    // width: '1195px',
    // minWidth: '1195px',
    // maxWidth: '1195px',
  },
  notificationIcon: {
    width: '19.97px',
    height: '19.5px',
    margin: '.3em',
  },
  badgeStyle: {
    width: '4px',
    minWidth: '4px',
    height: '4px',
    borderRadius: '50%',
    padding: 0,
  },
  cardsHolder: {
    columnCount: '3',
    columnFill: 'balance',
    width: '1175px',
    '@media (max-width: 1024px) and (min-height: 768px)': {
      width: '85%',
      columnCount: '2',
    },
    '@media (max-width: 768px)': {
      width: '80%',
      columnCount: '1',
    },
  },
});

export default useStyles;

export const notificationButtonTheme = {
  dark: {
    border: '2px solid #5C6987',
    disabledBgColor: '#666',
    disabledBorder: '2px solid #ccc',
    disabledColor: '#ccc',
    fontFamily: 'Typold Medium',
    fontSize: '14px',
    height: '50px',
    width: '50px',
    lineHeight: '19px',
    color: '#fff',
    padding: '14px 23px 16px',
    minWidth: '50px',
  },
};
