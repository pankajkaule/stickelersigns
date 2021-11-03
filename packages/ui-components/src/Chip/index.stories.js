import React from 'react';
import Chip from './index';

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    color: { control: 'color' },
    background: { control: 'color' },
    onFocusBGColor: { control: 'color' },
    deleteIconColor: { control: 'color' },
  },
};

const Template = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'chip',
  color: '#8C8C8C',
  background: '#2F3141',
  border: 'none',
  borderRadius: '5px',
  fontSize: '12px',
  lineHeight: '16px',
  fontFamily: 'Typold Bold',
  onFocusBGColor: '#2F3141',
  labelPadding: '8px 23px 10px 17px',
  deleteIconColor: '#8C8C8C',
  deleteIconWidth: '11px',
  deleteIconHeight: '11px',
  deleteIconPadding: '0 12px 0 0',
  deleteIconMargin: '0',
};
