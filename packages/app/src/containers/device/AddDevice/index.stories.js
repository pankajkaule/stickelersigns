import React from 'react';
import AddDevice from './index';

export default {
  title: 'Containers/Add device',
  component: AddDevice,
};

const Template = (args) => <AddDevice {...args} />;

export const Default = Template.bind({});
Default.args = {};
