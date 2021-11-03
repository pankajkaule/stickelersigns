import React from 'react';
import DeviceControls from './index';

export default {
  title: 'Containers/Device Controls',
  component: DeviceControls,
};

const Template = (args) => <DeviceControls {...args} />;

export const Default = Template.bind({});
Default.args = {};
