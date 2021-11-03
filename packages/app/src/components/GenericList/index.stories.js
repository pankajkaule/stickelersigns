import React from 'react';
import GenericList from '.';

export default {
  title: 'Components/GenericList',
  component: GenericList,
  argTypes: {
    handleChange: { action: 'Checkbox Change' },
  },
};

const Template = (args) => <GenericList {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'dark',
  title: 'Client Name',
  description: 'Description',
  link: 'Updates',
  linkComponent: null,
  activeLabel: 'ON',
  inActiveLabel: 'OFF',
  status: '',
  handleSetting: () => {},
  isCheckbox: false,
  checked: false,
  handleChange: () => {},
  LogoComponent: null,
  logo: '',
};
