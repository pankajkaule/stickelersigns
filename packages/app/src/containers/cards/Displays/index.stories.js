import React from 'react';
import Displays from './index';

export default {
  title: 'Containers/Cards/Displays',
  component: Displays,
};

const Template = (args) => <Displays {...args} />;

export const Default = Template.bind({});
Default.args = {};
