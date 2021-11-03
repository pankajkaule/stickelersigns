import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    backgroundColor: (props) => props.backgroundColor,
    border: (props) => props.border,
    padding: (props) => props.padding,
    color: (props) => props.color,
    position: 'relative',
    letterSpacing: '1px',
    width: (props) => props.width,
    height: (props) => props.height,
    overflow: 'inherit',
    boxShadow: (props) => props.boxShadow,
    borderRadius: '0',
    margin: (props) => props.margin,
    borderTopLeftRadius: (props) => props.borderTopLeftRadius,
    borderTopRightRadius: (props) => props.borderTopRightRadius,
    borderBottomLeftRadius: (props) => props.borderBottomLeftRadius,
    borderBottomRightRadius: (props) => props.borderBottomRightRadius,
    transition: (props) => props.transition,
    '&:hover': {
      borderColor: (props) => props.onHoverBorderColor,
      color: (props) => props.onHoverColor,
      background: (props) => props.onHoverBackgroundColor,
    },
    '&:hover p:only-of-type': {
      color: (props) => props.onHoverColor,
    },
    '&:hover hr:only-of-type': {
      background: (props) => props.onHoverColor,
    },
    '&:hover button:only-of-type': {
      fill: (props) => props.onHoverColor,
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
