import React from 'react';
import Divider from './index';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Divider {...args} />;
export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#5C6987',
  height: '2px',
  width: 'auto',
  margin: '0px',
  opacity: '15%',
  onHoverBackground: '#fff',
};
