import React from 'react';
import MediaGrid from '.';

export default {
  title: 'Containers/MediaGrid',
  component: MediaGrid,
};

const Template = (args) => <MediaGrid {...args} />;

export const Default = Template.bind({});

Default.args = {
  contentUrl:
    'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
};
