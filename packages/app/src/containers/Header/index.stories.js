import ThemeStore from 'context/theme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Header from '.';

export default {
  title: 'Containers/Header',
  component: Header,
  decorators: [
    (Story) => (
      <ThemeStore>
        <MemoryRouter initialEntries={['/dashboard']}>{Story()}</MemoryRouter>
      </ThemeStore>
    ),
  ],
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  absolutePaths: [],
};
