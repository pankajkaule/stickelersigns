import React, { useState } from 'react';
import Dropdown from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => {
  const [value, setValue] = useState('');

  return <Dropdown {...args} handleChange={(e) => setValue(e.target.value)} value={value} />;
};

export const Default = Template.bind({});

Default.args = {
  list: [
    { label: 'Value 1', value: 'value1' },
    { label: 'Value 2', value: 'value2' },
    { label: 'Value 3', value: 'value3' },
  ],
  popupBackground: '#1B1C24',
  dropdownBackground: '#2F3142',
  popupBorderColor: '#2E3036',
  labelColor: '#8C8C8C',
  iconColor: '#FFFFFF',
  selectedMenuColor: '#FFFFFF',
  menuColor: '#FFFFFF',
  menuHoverBackground: '#2F3142',
  selectedValueColor: 'rgb(103, 214, 255)',
  width: '270px',
  height: '40px',
  disabledColor: '#3A3C46',
  disabledBgColor: 'transparent',
  disabledBorder: '1px solid #3A3C46',
};
