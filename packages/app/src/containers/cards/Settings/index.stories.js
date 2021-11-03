import React from 'react';
import Settings from './index';

export default {
  title: 'Containers/Cards/Settings',
  component: Settings,
};

const Template = (args) => <Settings {...args} />;

export const Default = Template.bind({});
Default.args = {};
