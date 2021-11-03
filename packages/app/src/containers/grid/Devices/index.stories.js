import React from 'react';
import DeviceGrid from '.';

export default {
  title: 'Containers/DeviceGrid',
  component: DeviceGrid,
};

const Template = (args) => <DeviceGrid {...args} />;

export const Default = Template.bind({});

Default.args = {};
