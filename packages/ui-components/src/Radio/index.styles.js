import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '0 15px 0 0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 24,
    height: 24,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: (props) => props.backgroundColor,
    border: (props) => props.border,

    'input:disabled ~ &': {
      boxShadow: 'none',
      background: (props) => props.backgroundDisabled,
      border: (props) => props.borderDisabled,
    },
  },
  checkedIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: (props) => `${props.borderChecked} !important`,
    '&:before': {
      display: 'block',
      width: 18,
      height: 18,
      backgroundColor: (props) => props.backgroundChecked,
      content: '""',
      borderRadius: '50%',
    },
  },
});

export default useStyles;
