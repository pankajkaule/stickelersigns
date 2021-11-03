import React, { useState } from 'react';
import Tabs from './index';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template = (args) => {
  const [value, setValue] = useState(0);
  return <Tabs {...args} value={value} handleChange={(e, val) => setValue(val)} />;
};

export const Default = Template.bind({});
Default.args = {
  tabBorderBottom: '2px solid #83D4FF',
  tabOnHoverColor: '#FFF',
  tabOnSelectedColor: '#14151D',
  backgroundColor: '#14151D',
  borderBottom: '2px solid #09090A',
  color: '#B0B0B0',
  minHeight: '58px',
  maxHeight: '58px',
  selectedBackground: '#83D4FF',
  tabColor: '#FFF',
  iconColor: '#8C8C8C',
  list: [
    {
      label: 'Tab1',
      component: <div style={{ color: '#fff' }}>Tab1</div>,
    },
    {
      label: 'Tab2',
      component: <div style={{ color: '#fff' }}>Tab2</div>,
    },
    {
      label: 'Tab3',
      component: <div style={{ color: '#fff' }}>Tab3</div>,
    },
  ],
  buttonTheme: {
    backgroundColor: '#14151E',
    border: `none`,
    borderRadius: '5px',
    color: '#fff',
    disabledBgColor: '#666',
    disabledBorder: '2px solid #ccc',
    disabledColor: '#ccc',
    fontFamily: 'Typold Medium',
    fontSize: '14px',
    height: '62px',
    lineHeight: '19px',
    onFocusBgColor: '#14151E',
    onFocusBorder: 'none',
    onFocusColor: '',
    onHoverBgColor: '#14151E',
    onHoverBorder: `none`,
    onHoverColor: '',
    padding: '14px 23px 16px',
    variant: 'contained',
  },
};
