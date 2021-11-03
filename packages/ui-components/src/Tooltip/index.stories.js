import { Button } from '@material-ui/core';
import React from 'react';
import { Tooltip } from './index';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

const Template = (args) => (
  <Tooltip
    labe={args.label}
    title={args.title}
    open={args.open}
    arrow={args.arrow}
    theme={{
      backgroundColor: args.backgroundColor,
      color: args.color,
      minWidth: args.minWidth,
      width: args.width,
      maxWidth: args.maxWidth,
      height: args.height,
      minHeight: args.minHeight,
      maxHeight: args.maxHeight,
      padding: args.padding,
      borderTop: args.borderTop,
      borderColor: args.borderColor,
      borderRadius: args.borderRadius,
      fontSize: args.fontSize,
      lineHeight: args.lineHeight,
      letterSpacing: args.letterSpacing,
      textAlign: args.textAlign,
      margin: args.margin,
    }}>
    {args.children}
  </Tooltip>
);

export const Default = Template.bind({});

Default.args = {
  children: <Button />,
  title:
    'This will capture the screenshot of this display’s current activity and save it in library.',
  arrow: true,
  open: true,
  backgroundColor: '#3A3C45',
  color: '#FFFFFF',
  minWidth: '250px',
  width: '250px',
  maxWidth: '250px',
  height: 'auto',
  minHeight: '55px',
  maxHeight: 'auto',
  padding: '20px',
  borderTop: '5px solid',
  borderColor: '#83D4FF',
  borderRadius: 0,
  fontSize: '12px',
  lineHeight: '20px',
  letterSpacing: 'normal',
  textAlign: 'left',
  margin: 0,
};
