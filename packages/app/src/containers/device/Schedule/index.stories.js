import React from 'react';
import Schedule from '.';

export default {
  title: 'Containers/Schedule',
  component: Schedule,
};

const Template = (args) => <Schedule {...args} />;

export const Default = Template.bind({});

Default.args = {};
