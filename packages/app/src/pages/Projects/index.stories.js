import React from 'react';
import { MemoryRouter } from 'react-router';
import ThemeStore from '../../context/theme';
import Projects from './index';

export default {
  title: 'Pages/Projects',
  component: Projects,
  decorators: [
    (Story) => (
      <ThemeStore>
        <MemoryRouter initialEntries={['/projects']}>{Story()}</MemoryRouter>
      </ThemeStore>
    ),
  ],
};

const Template = (args) => <Projects {...args} />;

export const Default = Template.bind({});

Default.args = {};
