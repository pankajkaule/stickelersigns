import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 55,
    height: 30,
    padding: 1,
    '& > .MuiSwitch-colorSecondary.Mui-checked': {
      background: (props) => props.thumbActiveColor,
      backgroundClip: 'text',
      color: 'transparent',
      transform: 'translateX(27px)',
    },
  },
  switchBase: {
    padding: 2,
    color: (props) => props.thumbInActiveColor,
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 38 / 2,
    border: (props) => `${props.trackInActiveColor} solid #565555`,
    background: (props) => props.trackInActiveColor,
    opacity: 1,
  },
  checked: {
    '& $thumb': {
      color: (props) => `${props.thumbActiveColor}`,
    },
    '& + $track': {
      opacity: '1 !important',
      background: (props) => `${props.trackActiveColor} !important`,
      borderColor: (props) => `${props.trackActiveColor} !important`,
    },
  },
  focusVisible: {},
});

export default useStyles;
