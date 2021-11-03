import { makeStyles } from '@material-ui/core';
import themeConstants from 'themes/constants';

const useStyles = makeStyles({
  cards: {
    width: '370px',
    maxWidth: '370px',
    height: '370px',
    maxHeight: '370px',
    margin: '0 0 30px 0',
  },
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
    margin: '0 0 30px 0',
  },
  cardsContainer: {
    height: 'calc(100vh - 150px)',
    overflow: 'hidden',
    overflowY: 'auto',
    background: (props) => themeConstants[props.theme || 'dark'].colorBGGrey,
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: (props) => themeConstants[props.theme || 'dark'].colorBGGrey,
    },
    '&::-webkit-scrollbar-thumb': {
      background: (props) => themeConstants[props.theme || 'dark'].colorGradientHighlights,
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: (props) => themeConstants[props.theme || 'dark'].colorGradientHighlights,
    },
  },
});

export default useStyles;
