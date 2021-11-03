import React from 'react';
import Typography from './index';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    font: {
      control: 'select',
      options: ['Typold Bold', 'Typold Regular', 'Typold Black', 'Typold Medium'],
    },
    size: {
      control: 'select',
      options: ['18px', '16px', '14px', '12px'],
    },
    color: {
      control: 'color',
    },
  },
};
const Template = (args) => <Typography {...args} />;
export const Default = Template.bind({});
Default.args = {
  size: '12px',
  font: 'Typold Regular',
  color: '#fff',
  label: 'XLIV',
  lineHeight: '25px',
  textAlign: 'left',
  margin: '0 1em',
};

export const Important = Template.bind({});
Important.args = {
  size: '14px',
  font: 'Typold Regular',
  color: '#83D4FF',
  label: 'Software updates available',
  lineHeight: '25px',
  textAlign: 'left',
  margin: '0 1em',
};
