import React, { useState } from 'react';
import Range from './index';

export default {
  title: 'Components/Range',
  component: Range,
  argTypes: {
    onChange: { action: 'Changed' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(0);

  const handleChange = (val) => {
    setValue(val);
  };

  return (
    <Range {...args} value={value} valueThreshold={args.valueThreshold} onChange={handleChange} />
  );
};

export const Default = Template.bind({});
Default.args = {
  background: '#09090A',
  color: '#FFFFFF',
  padding: '4px',
  width: '262px',
  height: '32px',
  value: 0,
  valueThreshold: 1,
  btnLabel1: 'I',
  btnLabel2: 'D',
  buttonBgColor: '#292A2D',
  buttonColor: '#FFFFFF',
  buttonHeight: '32px',
  buttonWidth: '80px',
  buttonMinWidth: '80px',
  title: 'Volume',
  labelColor: '#8C8C8C',
  labelSize: 'sm',
};
