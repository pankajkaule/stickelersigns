import React from 'react';
import { MemoryRouter } from 'react-router';
import DeviceSettings from './index';

export default {
  title: 'Containers/DisplayDetails',
  component: DeviceSettings,
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/displays/settings']}>{Story()}</MemoryRouter>,
  ],
};

const Template = (args) => <DeviceSettings {...args} />;

export const Default = Template.bind({});
Default.args = {};
