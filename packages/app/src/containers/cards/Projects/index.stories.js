import React from 'react';
import Projects from './index';

export default {
  title: 'Containers/Cards/Projects',
  component: Projects,
};

const Template = (args) => <Projects {...args} />;

export const Default = Template.bind({});
Default.args = {};
