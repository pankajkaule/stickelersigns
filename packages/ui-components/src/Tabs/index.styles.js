import React from 'react';
import { withStyles, Tabs, Tab } from '@material-ui/core';

export const AntTabs = withStyles((theme) => ({
  root: {
    color: theme.color,
    minHeight: theme.min,
    maxHeight: theme.maxHeight,
    borderBottom: theme.borderBottom,
    background: theme.backgroundColor,
    borderRadius: '5px',
    padding: '5px',
  },
  indicator: {
    backgroundColor: 'transparent',
  },
  flexContainer: {
    maxHeight: '100%',
  },
}))((props) => <Tabs {...props} />);

export const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 'fit-content',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '2.57px',
    textAlign: 'center',
    fontFamily: 'Typold ExtraBold',
    padding: '17px 30px',
    borderRadius: '5px',
    borderBottom: `2px solid transparent !important`,
    color: theme.tabColor,
    '&:hover': {
      color: theme.tabOnHoverColor,
      opacity: 1,
    },
    // '&$selected': {
    //   color: theme.tabOnSelectedColor,
    //   borderBottom: `${theme.tabBorderBottom} !important`,
    // },
  },
  selected: {
    color: theme.tabOnSelectedColor,
    borderBottom: `${theme.tabBorderBottom} !important`,
    background: theme.selectedBackground,
  },
}))((props) => <Tab disableRipple {...props} />);
