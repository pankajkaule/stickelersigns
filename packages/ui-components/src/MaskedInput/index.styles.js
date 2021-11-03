import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  labelRoot: {
    color: (props) => props.labelColor,
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '16px',
    margin: '0 0 13px 0',
    transform: 'translate(0, -2.5px) scale(1)',
    '&.Mui-error': {
      color: (props) => props.labelColor,
    },
  },
  labelFocused: {
    color: (props) => `${props.labelColor} !important`,
  },
  inputRoot: {
    background: (props) => props.inputBackgroundColor,
    width: (props) => props.inputWidth,
    height: '40px',
    maxHeight: '40px',
    padding: '0 10px',
    borderRadius: '5px',
    color: (props) => props.inputColor,
    fontFamily: 'Typold Regular',
    fontSize: '12px',
    lineHeight: '16px',
  },
  formControl: {
    marginTop: '29px !important',
    '&.Mui-error > input': {
      border: '1px solid #FF003E',
    },
  },
});

export default useStyles;
