import React from 'react';
import DeviceGroupCard from './index';

export default {
  title: 'Components/Card/Display Group',
  component: DeviceGroupCard,
};

const Template = (args) => <DeviceGroupCard {...args} />;

export const Default = Template.bind({});

Default.args = {};
