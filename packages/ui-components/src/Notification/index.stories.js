import React from 'react';
import NotificationPopup from '.';

export default {
  title: 'Components/NotificationPopup',
  component: NotificationPopup,
  argTypes: {
    handleClose: { action: 'Clicked on close button' },
  },
};

const Template = (args) => <NotificationPopup {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: 'true',
  message: 'This is a success message',
  variant: 'success',
};
