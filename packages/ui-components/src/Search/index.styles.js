import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: (props) => props.width,
    height: (props) => props.height,
    padding: (props) => props.padding,
    transition: 'width .5s ease',
    '& .MuiFormControl-root': {},
    '& .MuiInput-root': {
      width: '100%',
      height: '100%',
      borderRadius: (props) => props.borderRadius,
      border: (props) => props.inputBorder,
      padding: '15px 17px',
      fontSize: (props) => props.fontSize,
      color: (props) => props.color,
      fontFamily: (props) => props.fontFamily,
      background: (props) => props.backgroundColor,
    },
    '& .MuiInputBase-root.Mui-disabled': {
      background: (props) => `${props.disabledBgColor} !important`,
      color: (props) => `${props.disabledColor} !important`,
      border: (props) => props.disabledBorder,
    },
    '& .MuiInput-root.Mui-focused': {
      color: (props) => props.onHoverColor,
      border: (props) => props.onHoverBorder,
      backgroundColor: (props) => props.onHoverBgColor,
    },
    '& .MuiInputBase-input': {
      fontSize: (props) => props.fontSize,
      lineHeight: '1em',
      color: 'inherit',
      '&::placeholder': {
        color: 'inherit',
        opacity: 1,
      },
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
  },
  icon: {
    fontSize: (props) => props.iconFontSize,
    color: (props) => props.iconColor,
  },
});

export default useStyles;
