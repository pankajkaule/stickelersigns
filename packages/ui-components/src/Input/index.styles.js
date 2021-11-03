import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: (props) => props.width,
    height: (props) => props.height,

    '& .MuiFormControl-root': {
      '& .Mui-error': {
        color: '#FF003E !important',
      },
    },
    '& .MuiInput-root': {
      width: '100%',
      height: '100%',
      borderRadius: (props) => props.borderRadius,
      border: (props) => props.inputBorder,
      fontSize: (props) => props.fontSize,
      color: (props) => props.color,
      fontFamily: (props) => props.fontFamily,
      backgroundColor: (props) => props.backgroundColor,
      '&.MuiInputBase-root.Mui-disabled': {
        color: (props) => props.disabledColor,
        background: (props) => props.disabledBgColor,
        border: (props) => props.disabledBorder,
      },
    },
    '& .MuiInput-formControl.Mui-focused': {
      color: (props) => props.onHoverColor,
      border: (props) => props.onHoverBorder,
      backgroundColor: (props) => props.onHoverBgColor,
      borderRadius: '5px',
    },

    '& .MuiInputLabel-root': {
      fontSize: (props) => props.fontSize,
    },
    '& label.MuiInputLabel-shrink': {
      fontFamily: 'Typold Regular',
      lineHeight: '16px',
      transform: 'translate(0, -2.5px) scale(1)',
      color: (props) => props.labelColor,
    },
    '& label + .MuiInput-formControl': {
      marginTop: '2em',
      '&.Mui-error': {
        borderRadius: '5px',
        border: '1px solid #FF003E',
      },
    },
    '& .MuiInputBase-input': {
      padding: (props) => (props.padding ? props.padding : '13px 17px'),
      fontFamily: 'Typold Regular',
      '&::placeholder': {
        color: (props) => props.color,
        opacity: 1,
      },
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: '#FF003E',
    },
    '& .MuiInput-underline:before': {
      border: 'none',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      border: 'none',
    },
    '& .MuiInput-underline:after': {
      border: 'none',
    },
    '.MuiInput-underline:hover': {
      border: 'none',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
});

export default useStyles;
