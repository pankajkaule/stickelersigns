import ThemeStore from 'context/theme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Devices from './index';

export default {
  title: 'Pages/Displays',
  component: Devices,
  decorators: [
    (Story) => (
      <ThemeStore>
        <MemoryRouter initialEntries={['/displays']}>{Story()}</MemoryRouter>
      </ThemeStore>
    ),
  ],
};

const Template = (args) => <Devices {...args} />;
export const Default = Template.bind({});
Default.args = {};
