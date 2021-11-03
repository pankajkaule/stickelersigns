import React from 'react';
import Profile from './index';

export default {
  title: 'Containers/Cards/Profile',
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {};
