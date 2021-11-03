import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: (props) => props.padding,
    height: (props) => props.height,
    maxHeight: (props) => props.maxHeight,
    minHeight: (props) => props.minHeight,
    maxWidth: (props) => props.maxWidth,
    width: (props) => props.width,
    minWidth: (props) => props.minWidth,
    color: (props) => props.color,
    margin: (props) => props.margin,
    borderRadius: (props) => props.borderRadius,
    background: (props) => props.background,
    border: (props) => props.border,
    transition: 'background .3s ease-in-out',
    '&:hover': {
      background: (props) => props.onHoverBG,
    },
    '&:hover p:only-of-type': {
      color: (props) => props.color,
    },
    '&:hover hr:only-of-type': {
      background: (props) => props.color,
    },
    '&:hover button:only-of-type': {
      fill: (props) => props.color,
    },
    '&:hover > div> div> div> div> div> div > #close-icon-btn': {
      fill: '#C60A2B',
      color: '#C60A2B',
    },
    '&:hover > div> div> div> div> div> div > #check-icon-btn': {
      fill: '#00D955',
      color: '#00D955',
    },
  },
});

export default useStyles;
