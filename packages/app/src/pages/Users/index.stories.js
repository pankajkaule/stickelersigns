import React from 'react';
import Users from '.';

export default {
  title: 'Pages/Users',
  component: Users,
};

const Template = (args) => <Users {...args} />;

export const Default = Template.bind({});

Default.args = {};
