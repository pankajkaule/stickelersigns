import React, { useState } from 'react';
import Switch from './index';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    onChange: { action: 'onChange' },
    thumbActiveColor: { control: 'color' },
    thumbInActiveColor: { control: 'color' },
    trackActiveColor: { control: 'color' },
    trackInActiveColor: { control: 'color' },
  },
};

const Template = (args) => {
  const [val, setVal] = useState(false);
  return <Switch {...args} value={val} onChange={(e) => setVal(e.target.checked)} />;
};

export const Default = Template.bind({});
Default.args = {
  thumbActiveColor: 'linear-gradient(135deg, #75CFFF 0%, #5735FD 100%)',
  thumbInActiveColor: '#2E3036',
  trackActiveColor: '#09090A',
  trackInActiveColor: '#09090A',
  value: true,
  label: 'Display Power:',
  valueMapper: { true: 'ON', false: 'OFF' },
  labelColor: 'secondary',
  labelFontSize: 'medium',
};
