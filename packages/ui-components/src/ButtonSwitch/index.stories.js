import React, { useState } from 'react';
import ButtonSwitch from './index';

export default {
  title: 'Components/ButtonSwitch',
  component: ButtonSwitch,
  argTypes: {
    handleClick: { action: 'Toggled' },
    activeBgColor: { control: 'color' },
    activeColor: { control: 'color' },
    activeHoverColor: { control: 'color' },
    activeHoverBgColor: { control: 'color' },
    inActiveBgColor: { control: 'color' },
    inActiveColor: { control: 'color' },
    inActiveHoverColor: { control: 'color' },
    inActiveHoverBgColor: { control: 'color' },
    defaultValue: { control: 'select', options: [true, false] },
    value: { control: 'select', options: [true, false] },
  },
};

const Template = (args) => {
  const [toggle, setToggle] = useState('');

  const handleClick = (value) => {
    setToggle(value);
  };

  return <ButtonSwitch {...args} handleClick={handleClick} value={toggle} />;
};

export const Default = Template.bind({});
Default.args = {
  activeBgColor: '#09090A',
  activeColor: '#00D465',
  activeHoverColor: '#00D465',
  activeHoverBgColor: '#09090A',
  inActiveBgColor: '#09090A',
  inActiveColor: '#8E8E8E',
  inActiveHoverColor: '#8E8E8E',
  inActiveHoverBgColor: '#09090A',
  activeLabel: 'ON',
  inActiveLabel: 'OFF',
  defaultValue: false,
  value: false,
  borderRadius: '5px',
};
