import React from 'react';
import ProjectGrid from '.';

export default {
  title: 'Containers/ProjectGrid',
  component: ProjectGrid,
};

const Template = (args) => <ProjectGrid {...args} />;

export const Default = Template.bind({});

Default.args = {};
