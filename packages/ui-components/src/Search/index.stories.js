import React, { useState } from 'react';
import SearchBox from './index';

export default {
  title: 'Components/SearchBox',
  component: SearchBox,
  argTypes: {
    color: { control: 'color' },
    onHoverColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    onHoverBgColor: { control: 'color' },
    onChange: { action: 'change' },
    onBlur: { action: 'blur' },
  },
};

const Template = (args) => {
  const [val, setVal] = useState('');

  return (
    <SearchBox
      {...args}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      handleClear={() => setVal('')}
    />
  );
};
export const Default = Template.bind({});
Default.args = {
  label: '',
  placeholder: 'Search display',
  inputBorder: '1px solid transparent',
  fontSize: '12px',
  iconFontSize: '14px',
  color: '#FFFFFF',
  onHoverColor: '#FFFFFF',
  onHoverBorder: '1px solid #fff',
  fontFamily: 'Typold Regular',
  backgroundColor: '#2F3142',
  onHoverBgColor: '#3A3C46',
  width: '574px',
  height: '40px',
  borderRadius: '5px',
  disabledBgColor: 'transparent',
  disabledBorder: '1px solid #2E3037',
  disabledColor: '#3A3C46',
  iconColor: '#fff',
};
