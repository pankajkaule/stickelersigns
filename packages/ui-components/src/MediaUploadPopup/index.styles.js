import { makeStyles } from '@material-ui/core';
import themeConstants from '../constants/constants';

const useStyles = makeStyles({
  fileList: {
    width: '710px',
    maxWidth: '710px',
    height: '240px',
    maxHeight: '240px',
    overflow: 'auto',
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
