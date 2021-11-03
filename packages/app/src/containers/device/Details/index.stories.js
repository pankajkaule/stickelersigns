import React from 'react';
import Details from '.';

export default {
  title: 'Containers/Details',
  component: Details,
};

const Template = (args) => <Details {...args} />;

export const Default = Template.bind({});

Default.args = {};
