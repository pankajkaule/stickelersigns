import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    height: (props) => props.height,
    maxHeight: (props) => props.maxHeight,
    background: (props) => props.background,
    color: (props) => props.color,
    borderTop: (props) => props.borderTop,
    borderRight: (props) => props.borderRight,
    borderLeft: (props) => props.borderLeft,
    borderBottom: (props) => props.borderBottom,
    top: (props) => props.top,

    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#1f1f35',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#fff',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#fff',
    },
  },
  root: {
    '& > .MuiBackdrop-root': {
      backdropFilter: 'blur(30px) !important',
    },
  },
  contentContainer: {
    padding: (props) => props.padding,
  },
  loader: {
    height: (props) => props.loaderHeight,
    borderRadius: (props) => props.loaderBorderRadius,
    width: (props) => props.loaderWidth,
    minHeight: (props) => props.loaderHeight,
  },
  colorPrimary: { background: (props) => props.barColor },
  bar: {
    borderRadius: (props) => props.loaderBorderRadius,
    background: (props) => props.loaderColor,
  },
});

export default useStyles;
