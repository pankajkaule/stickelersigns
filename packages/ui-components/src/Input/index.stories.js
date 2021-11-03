import React, { useState } from 'react';
import InputComponent from './index';

export default {
  title: 'Components/InputComponent',
  component: InputComponent,
  argTypes: {
    labelColor: { control: 'color' },
    borderColor: { control: 'color' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  const [val, setVal] = useState('');
  return (
    <InputComponent
      {...args}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      handleClear={() => setVal('')}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  labelColor: 'orange',
  inputBorder: 'none',
  color: '#fff',
  backgroundColor: '#2F3142',
  onHoverBorder: '1px solid #fff',
  fontSize: '12px',
  borderRadius: '5px',
  label: '',
  placeholder: 'Default',
  padding: '12px 10px',
  lineHeight: '16px',
  disabledColor: '#3A3C46',
  disabledBgColor: 'transparent',
  disabledBorder: '1px solid #3A3C46',
};

export const WithLabel = Template.bind({});

WithLabel.args = {
  labelColor: '#8C8C8C',
  inputBorder: 'none',
  backgroundColor: '#2F3142',
  color: '#fff',
  fontSize: '12px',
  borderRadius: '5px',
  label: 'With Label',
  placeholder: 'Name',
  padding: '12px 10px',
  lineHeight: '16px',
  onHoverColor: '#FFFFFF',
  onHoverBorder: '1px solid #fff',
  onHoverBgColor: '#3A3C46',
  disabledColor: '#3A3C46',
  disabledBgColor: 'transparent',
  disabledBorder: '1px solid #3A3C46',
};
