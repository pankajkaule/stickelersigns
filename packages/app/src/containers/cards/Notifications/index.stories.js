import React from 'react';
import NotificationCard from '.';

export default {
  title: 'Containers/Cards/Notifications',
  component: NotificationCard,
};

const Template = (args) => <NotificationCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
