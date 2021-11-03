import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    color: (props) => props.color,
    fontSize: (props) => props.size,
    margin: (props) => props.margin,
    fontFamily: (props) => props.font,
    lineHeight: (props) => props.lineHeight,
    letterSpacing: (props) => props.letterSpacing,
    textAlign: (props) => props.textAlign,
    width: (props) => props.width,
    height: (props) => props.height,
    minWidth: (props) => props.minWidth,
    minHeight: (props) => props.minHeight,
    cursor: (props) => props.cursor,
    wordBreak: 'break-all',
    '&:hover': {
      background: 'inherit',
    },
  },
});

export default useStyles;
