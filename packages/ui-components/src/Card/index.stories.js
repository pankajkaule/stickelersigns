import React from 'react';
import Card from './index';

export default {
  title: 'Components/Cards/Default',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Card',
  backgroundColor: '#1A1B1D',
  padding: '1em',
  color: '#fff',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
  width: '370px',
  height: '170px',
  margin: '1em',
  onHoverBorderColor: '',
  onHoverColor: '',
  onHoverBackgroundColor: 'linear-gradient(135deg, #75CFFF 0%, #5735FD 100%)',
  transition: 'background 2s',
};
