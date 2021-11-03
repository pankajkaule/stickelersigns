import React, { useState } from 'react';
import Checkbox from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: { action: 'Changed' },
  },
};

const Template = (args) => {
  const { value } = args;
  const [val, setVal] = useState(value || false);
  return <Checkbox {...args} value={val} onChange={(e) => setVal(e.target.checked)} />;
};

export const Default = Template.bind({});
Default.args = {
  labelColor: '#8C8C8C',
  labelLineHeight: '16px',
  labelSize: '12px',
  labelFont: 'Typold Regular',
  labelMargin: '0 0 15px 0',
  valueColor: '#FFFFFF',
  valueLineHeight: '19px',
  valueSize: '14px',
  valueFont: 'Typold Regular',
  valueMargin: '0',
  checkboxColor: '#83D4FF',
  label: '',
  valueLabel: '',
  checkboxDisableColor: '#8C8C8C',
  valueDisableColor: '#8C8C8C',
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  labelColor: '#8C8C8C',
  labelLineHeight: '16px',
  labelSize: '12px',
  labelFont: 'Typold Regular',
  labelMargin: '0 0 15px 0',
  valueColor: '#FFFFFF',
  valueLineHeight: '19px',
  valueSize: '14px',
  valueFont: 'Typold Regular',
  valueMargin: '0',
  checkboxColor: '#83D4FF',
  label: 'Checkbox',
  valueLabel: 'Value',
  checkboxDisableColor: '#8C8C8C',
  valueDisableColor: '#8C8C8C',
};

export const Disabled = Template.bind({});
Disabled.args = {
  labelColor: '#8C8C8C',
  labelLineHeight: '16px',
  labelSize: '12px',
  labelFont: 'Typold Regular',
  labelMargin: '0 0 15px 0',
  valueColor: '#FFFFFF',
  valueLineHeight: '19px',
  valueSize: '14px',
  valueFont: 'Typold Regular',
  valueMargin: '0',
  checkboxColor: '#83D4FF',
  label: 'Checkbox',
  valueLabel: 'Value',
  disabled: true,
  value: true,
  checkboxDisableColor: '#8C8C8C',
  valueDisableColor: '#8C8C8C',
};

export const UnCheckDisabled = Template.bind({});
UnCheckDisabled.args = {
  labelColor: '#8C8C8C',
  labelLineHeight: '16px',
  labelSize: '12px',
  labelFont: 'Typold Regular',
  labelMargin: '0 0 15px 0',
  valueColor: '#FFFFFF',
  valueLineHeight: '19px',
  valueSize: '14px',
  valueFont: 'Typold Regular',
  valueMargin: '0',
  checkboxColor: '#83D4FF',
  label: 'Checkbox',
  valueLabel: 'Value',
  disabled: true,
  value: false,
  checkboxDisableColor: '#8C8C8C',
  valueDisableColor: '#8C8C8C',
};
