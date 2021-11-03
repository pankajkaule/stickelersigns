import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  formLabelRoot: {
    fontFamily: '',
    margin: '0',
    '& > .MuiTypography-root': {
      fontFamily: '',
      fontSize: '14px',
      color: '#FFF',
      '&.Mui-disabled': {
        color: (props) => `${props.valueDisableColor} !important`,
      },
    },
  },
  checkboxRoot: {
    color: '#3A3C45',
    borderRadius: '4px',
    borderWidth: '1px',
    width: '26px',
    height: '26px',
    padding: '0',
    margin: '0 20px 0 0',
    '&.Mui-disabled': {
      color: (props) => `${props.checkboxDisableColor} !important`,
    },
  },
  checkboxChecked: {
    color: (props) => `${props.checkboxColor} !important`,
    '&.Mui-disabled': {
      color: (props) => `${props.checkboxDisableColor} !important`,
    },
  },
});

export default useStyles;
