import React from 'react';
import DisplayAppsCard from '.';

export default {
  title: 'Containers/Cards/Displays Apps Updates',
  component: DisplayAppsCard,
};

const Template = (args) => <DisplayAppsCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
