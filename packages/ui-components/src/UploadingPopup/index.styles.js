import { makeStyles } from '@material-ui/core';
import themeConstants from '../constants/constants';

const useStyles = makeStyles({
  root: {
    background: (props) => props.background,
    borderRadius: (props) => props.borderRadius,
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    width: (props) => props.width,
    maxWidth: (props) => props.maxWidth,
    minWidth: (props) => props.minWidth,
    height: (props) => props.height,
    zIndex: '1301',
  },
  contentContainer: {
    maxHeight: 'calc(100vh - 328px)',
    padding: '0 5px 0 0',
    overflow: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '5px',
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
});

export default useStyles;
