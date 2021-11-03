const useStyles = (props) => ({
  baseStyle: {
    flex: 1,
    width: props.width,
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    height: props.height,
    minHeight: props.minHeight,
    maxHeight: props.maxHeight,
    background: props.background,
    justifyContent: 'center',
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    lineHeight: props.lineHeight,
    letterSpacing: props.letterSpacing,
    textAlign: props.textAlign,
    color: props.color,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: props.padding,
    borderWidth: props.borderWidth,
    borderRadius: props.borderRadius,
    borderColor: props.borderColor,
    borderStyle: 'solid',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  },

  activeStyle: {
    borderColor: props.activeBorderColor,
  },

  acceptStyle: {
    borderColor: props.acceptedBorderColor,
    background: props.acceptedBackgroundColor,
    borderStyle: 'dashed',
  },

  rejectStyle: {
    borderColor: props.rejectedBackgroundColor,
  },
});

export default useStyles;
