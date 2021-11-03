import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    width: (props) => props.width,
    maxWidth: (props) => props.maxWidth,
    minWidth: (props) => props.minWidth,
    background: (props) => props.background,
    height: (props) => props.height,
    maxHeight: (props) => props.maxHeight,
    minHeight: (props) => props.minHeight,
    borderTop: 'double 2px transparent',
    borderRadius: (props) => props.borderRadius,
    backgroundImage: (props) =>
      `linear-gradient(${props.background}, ${props.background}), ${props.borderColor}`,
    backgroundOrigin: 'border-box !important',
    backgroundClip: 'content-box, border-box !important',
    '& > .MuiDialogContent-root': {
      padding: (props) => props.padding,
      color: (props) => props.color,
      overflow: (props) => props.overflow,
    },
  },
  root: {
    '& > .MuiBackdrop-root': {
      backdropFilter: 'blur(30px)',
    },
    '& > .MuiDialog-scrollPaper': {
      justifyContent: (props) => props.justifyContent,
      alignItems: (props) => props.alignItems,
    },
  },
});

export default useStyles;
