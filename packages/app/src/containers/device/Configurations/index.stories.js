import React from 'react';
import Configurations from './index';

export default {
  title: 'Containers/Configurations',
  component: Configurations,
};

const Template = (args) => <Configurations {...args} />;

export const Default = Template.bind({});

Default.args = {};
