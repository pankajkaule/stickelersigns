import { makeStyles } from '@material-ui/core';
import { fontFamily } from 'constants/constants';
import themeConstants from 'themes/constants';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    overflow: 'auto',
    overflowX: 'hidden',
    background: (props) => themeConstants[props.theme || 'dark'].colorDarkGrey,
    '&::-webkit-scrollbar': {
      width: '0px',
    },
    '&::-webkit-scrollbar-track': {
      background: (props) => themeConstants[props.theme || 'dark'].colorDarkGrey,
    },
    '&::-webkit-scrollbar-thumb': {
      background: (props) => themeConstants[props.theme || 'dark'].colorGradientHighlights,
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: (props) => themeConstants[props.theme || 'dark'].colorGradientHighlights,
    },
  },
  breadCrumbContainer: {
    width: '1175px',
    maxWidth: '1175px',
    '@media (max-width: 1024px) and (min-height: 768px)': {
      width: '85%',
    },
    '@media (max-width: 768px)': {
      width: '80%',
    },
  },
  badgeStyle: {
    width: '10px',
    minWidth: '10px',
    height: '10px',
    borderRadius: '50%',
    padding: 0,
  },
  snackbar: {
    top: '100px',
    '& > .MuiSnackbarContent-root': {
      background: themeConstants['dark'].colorUIElementGrey,
      padding: '17px',
      minWidth: '150px',
      justifyContent: 'center',
      color: themeConstants['dark'].colorLightGrey,
      fontFamily: fontFamily.regular,
      lineHeight: '16px',
    },
  },
});

export default useStyles;
