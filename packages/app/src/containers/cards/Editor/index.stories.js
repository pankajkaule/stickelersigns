import React from 'react';
import Editor from './index';

export default {
  title: 'Containers/Cards/Editor',
  component: Editor,
};

const Template = (args) => <Editor {...args} />;

export const Default = Template.bind({});
Default.args = {};
