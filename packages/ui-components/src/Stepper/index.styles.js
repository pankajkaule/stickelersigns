import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  label: {
    display: 'none',
    textAlign: 'left',
  },
  labelContainer: {
    margin: 0,
    flexDirection: 'row ',
  },
  alternativeLabel: {
    margin: '0 !important',
    flex: 'none !important',
    flexDirection: 'row !important',
    fontFamily: 'Typold ExtraBold',
    fontSize: '14px',
    lineHeight: '19px',
    letterSpacing: '3px',

    '& .MuiStepLabel-active': {
      color: (props) => props.activeColor,
      display: 'block !important',
      textAlign: 'left',
      margin: '10px !important',
      textTransform: 'uppercase',
    },
    '& .MuiStepLabel-completed': {
      display: 'none',
    },
  },
});

export default useStyles;

export const userConnectorStyles = makeStyles({
  line: {
    border: 0,
    backgroundColor: 'transparent',
  },
});

export const userIconStyles = makeStyles({
  root: {
    zIndex: 1,
    color: (props) => props.color,
    width: 44,
    height: 44,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    background: (props) => props.background,
    fontFamily: 'Typold ExtraBold',
    fontSize: '18px',
    lineHeight: '25px',
  },
  active: {
    background: (props) => props.activeBackground,
    color: (props) => props.activeColor,
  },
  completed: {
    background: (props) => props.completedBackground,
    color: (props) => props.completedColor,
  },
});
