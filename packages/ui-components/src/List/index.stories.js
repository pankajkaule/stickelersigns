import React from 'react';
import List from './index';

export default {
  title: 'Components/List',
  component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});

Default.args = {
  padding: '20px 30px',
  background: '#1A1B1D',
  color: '#fff',
  height: '120px',
  onHoverBG: 'linear-gradient(135deg, #75CFFF 0%, #5735FD 100%)',
  borderRadius: '10px',
  children: 'List Item',
};
