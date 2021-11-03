import React from 'react';
import ButtonToggle from './index';

export default {
  title: 'Components/ButtonToggle',
  component: ButtonToggle,
  argTypes: {
    handleSelect: { action: 'switch' },
    activeBtnBgColor: { control: 'color' },
    activeBtnColor: { control: 'color' },
    inActiveBtnBgColor: { control: 'color' },
    inActiveBtnColor: { control: 'color' },
    btnGroupBgColor: { control: 'color' },
    labelColor: { control: 'color' },
    labelSize: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
};

const Template = (args) => <ButtonToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '270px',
  height: '40px',
  title: 'Display Mode',
  labelColor: '#8C8C8C',
  labelSize: '12px',
  value: 'run-time',
  list: [
    { value: 'run-time', label: 'Run Time' },
    { value: 'stand-by', label: 'Stand by' },
  ],
  disableElevation: true,
  borderRadius: '5px',
  activeBtnBgColor: '#2F3142',
  activeBtnColor: '#FFFFFF',
  btnGroupBgColor: '#14151D',
  btnGroupSpacing: '4px',
  inActiveBtnBgColor: '#14151D',
  inActiveBtnColor: '#8C8C8C',
};
