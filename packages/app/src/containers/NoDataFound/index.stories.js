import React from 'react';
import NoProjectsFound from '.';

export default {
  title: 'Containers/NoProjectsFound',
  component: NoProjectsFound,
};

const Template = (args) => <NoProjectsFound {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: `Create Interactive Projects using the medias that you have added.
  Assign projects to Displays`,
  btnTitle: 'Create Project',
};
