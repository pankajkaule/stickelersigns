import React from 'react';
import Dialog from './index';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

const Template = (args) => {
  const {
    background,
    width,
    height,
    borderRadius,
    borderColor,
    color,
    padding,
    handleClose,
    open,
  } = args;
  return (
    <Dialog
      open={open}
      handleClose={handleClose}
      styles={{ background, width, height, borderRadius, borderColor, color, padding }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
  background: '#1A1B1D',
  width: '770px',
  height: '203px',
  borderRadius: '6px',
  borderColor: 'linear-gradient(135deg, #83D4FF 0%, #00A2D4 100%)',
  color: '#fff',
  padding: '45px',
};
