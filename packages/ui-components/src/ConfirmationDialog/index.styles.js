import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    width: (props) => props.width,
    background: (props) => props.background,
    height: (props) => props.height,
    borderTop: 'double 2px transparent',
    borderRadius: (props) => props.borderRadius,
    backgroundImage: (props) =>
      `linear-gradient(${props.background}, ${props.background}), ${props.borderColor}`,
    backgroundOrigin: 'border-box !important',
    backgroundClip: 'content-box, border-box !important',
    '& > .MuiDialogContent-root': {
      padding: (props) => props.padding,
      color: (props) => props.color,
    },
  },
  header: {
    padding: '30px 30px 10px !important',
    '&> h2': {
      fontFamily: 'Typold Regular',
      fontSize: '18px',
      lineHeight: '25px',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: (props) => props.headerColor,
    },
  },
  content: {
    padding: '0 30px 30px !important',
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: (props) => `${props.contentColor} !important`,
  },
  actions: {
    padding: '0 30px 30px !important',
  },
  root: {
    '& > .MuiBackdrop-root': {
      backdropFilter: 'blur(30px)',
    },
  },
});

export default useStyles;
