import React from 'react';
import DeviceList from '.';

export default {
  title: 'Containers/DeviceList',
  component: DeviceList,
};

const Template = (args) => <DeviceList {...args} />;

export const Default = Template.bind({});

Default.args = {};
