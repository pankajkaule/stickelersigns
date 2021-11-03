import React from 'react';
import LoginView from './index';

export default {
  title: 'Pages/Login',
  component: LoginView,
};

const Template = (args) => <LoginView {...args} />;

export const Default = Template.bind({});

Default.args = {};
