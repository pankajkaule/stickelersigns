import { makeStyles } from '@material-ui/core';
import themeConstants from 'themes/constants';

const useStyles = makeStyles({
  container: {
    width: '1175px',
    maxWidth: '1175px',
  },
  listContainer: {
    maxHeight: 'calc(100vh - 416px)',
    height: '100%',
    overflow: 'hidden',
    overflowY: 'auto',
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
