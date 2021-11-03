import React from 'react';
import DeviceSummary from '.';

export default {
  title: 'Containers/DeviceSummary',
  component: DeviceSummary,
};

const Template = (args) => <DeviceSummary {...args} />;

export const Default = Template.bind({});

Default.args = {};
