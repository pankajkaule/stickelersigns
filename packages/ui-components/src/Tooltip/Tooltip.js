import React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider, Tooltip, withStyles } from '@material-ui/core';

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    minWidth: theme.minWidth,
    width: theme.width,
    maxWidth: theme.maxWidth,
    height: theme.height,
    minHeight: theme.minHeight,
    maxHeight: theme.maxHeight,
    padding: theme.padding,
    borderTop: `5px solid`,
    borderColor: theme.borderColor,
    borderRadius: theme.borderRadius,
    fontSize: theme.fontSize,
    lineHeight: theme.lineHeight,
    letterSpacing: theme.letterSpacing,
    textAlign: theme.textAlign,
    margin: theme.margin,
  },
  arrow: {
    color: theme.borderColor,
    marginTop: '-.9em !important',
    marginLeft: '4px !important',
    fontSize: '18px !important',
  },
}))(Tooltip);

const ToolTip = React.forwardRef((props, ref) => {
  const { children, theme, title, arrow, open, placement } = props;
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <HtmlTooltip title={title} arrow={arrow} open={open} ref={ref} placement={placement}>
        {children}
      </HtmlTooltip>
    </ThemeProvider>
  );
});

ToolTip.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string),
  arrow: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  placement: PropTypes.string,
};

ToolTip.defaultProps = {};

export default ToolTip;
