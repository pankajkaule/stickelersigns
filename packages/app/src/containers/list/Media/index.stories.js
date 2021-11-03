import React from 'react';
import MediaList from '.';

export default {
  title: 'Containers/MediaList',
  component: MediaList,
};

const Template = (args) => <MediaList {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Youtube: Video',
  contentType: 'Video',
  size: '30 MB',
  projects: [1],
};
