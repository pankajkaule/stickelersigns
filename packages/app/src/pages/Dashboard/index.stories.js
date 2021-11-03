import React from 'react';
import { MemoryRouter } from 'react-router';
import ThemeStore from 'context/theme';
import Dashboard from '.';
import UserStore from 'context/user';

export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
  decorators: [
    (Story) => (
      <ThemeStore>
        <UserStore>
          <MemoryRouter initialEntries={['/dashboard']}>
            <Story />
          </MemoryRouter>
        </UserStore>
      </ThemeStore>
    ),
  ],
};

const Template = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {};
