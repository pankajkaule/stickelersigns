import { makeStyles } from '@material-ui/core';
import themeConstants from 'themes/constants';

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
  cardsContainer: {
    height: 'calc(100vh - 150px)',
    overflow: 'hidden',
    overflowY: 'auto',
    background: (props) => themeConstants[props.theme || 'dark'].colorDarkGrey,
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: (props) => themeConstants[props.theme || 'dark'].colorDarkGrey,
    },
    '&::-webkit-scrollbar-thumb': {
      background: (props) => themeConstants[props.theme || 'dark'].colorGradientHighlights,
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: (props) => themeConstants[props.theme || 'dark'].colorGradientHighlights,
    },
  },
});

export default useStyles;
