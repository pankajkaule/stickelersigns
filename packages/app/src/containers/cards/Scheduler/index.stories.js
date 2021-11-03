import React from 'react';
import Scheduler from './index';

export default {
  title: 'Containers/Cards/Scheduler',
  component: Scheduler,
};

const Template = (args) => <Scheduler {...args} />;

export const Default = Template.bind({});
Default.args = {};
