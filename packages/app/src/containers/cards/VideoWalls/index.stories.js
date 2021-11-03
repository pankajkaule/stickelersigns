import React from 'react';
import VideoWalls from './index';

export default {
  title: 'Containers/Cards/VideoWalls',
  component: VideoWalls,
};

const Template = (args) => <VideoWalls {...args} />;

export const Default = Template.bind({});
Default.args = {};
