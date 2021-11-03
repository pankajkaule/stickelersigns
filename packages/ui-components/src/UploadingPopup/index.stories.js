import React from 'react';
import UploadingPopup from '.';

export default {
  title: 'Components/UploadingPopup',
  component: UploadingPopup,
};

const Template = (args) => {
  const { open, title, list } = args;
  return <UploadingPopup title={title} list={list} open={open} />;
};

export const Default = Template.bind({});

Default.args = {
  open: true,
  list: [
    {
      label: 'Media 1 Name',
      value: 100,
    },
    {
      label: 'Media 2 Name',
      value: 75,
    },
    {
      label: 'Media 3 Name',
      value: 50,
    },
    {
      label: 'Media 4 Name',
      value: 0,
    },
  ],
};
