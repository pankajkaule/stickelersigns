import ThemeStore from 'context/theme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Media from './index';

export default {
  title: 'Pages/Media',
  component: Media,
  decorators: [
    (Story) => (
      <ThemeStore>
        <MemoryRouter initialEntries={['/dashboard/media']}>
          <Story />
        </MemoryRouter>
      </ThemeStore>
    ),
  ],
};

const Template = (args) => <Media {...args} />;

export const Default = Template.bind({});

Default.args = {};
