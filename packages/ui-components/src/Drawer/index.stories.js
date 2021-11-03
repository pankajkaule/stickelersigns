import React from 'react';
import Drawer from './index';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    color: { control: 'color' },
    background: { control: 'color' },
    anchor: { control: 'select', options: ['top', 'bottom', 'right', 'left'] },
  },
};

const Template = (args) => <Drawer {...args} />;

export const Default = Template.bind({});
Default.args = {
  anchor: 'bottom',
  open: 'true',
  children: <div>Device settings</div>,
  height: '100%',
  maxHeight: '76.42%',
  background: '#1A1B1D',
  color: '#fff',
  borderTop: 'none',
  padding: '20px',
  backdropFilter: 'blur(10px)',
};

export const Loader = Template.bind({});
Loader.args = {
  anchor: 'bottom',
  open: 'true',
  children: <div>Device settings</div>,
  height: '100%',
  maxHeight: '76.42%',
  background: '#1A1B1D',
  color: '#fff',
  borderTop: 'none',
  padding: '20px',
  backdropFilter: 'blur(10px)',
  loader: true,
  loaderHeight: '5px',
  loaderBorderRadius: '1px',
  loaderWidth: '100%',
  barColor: '#fff',
  loaderColor: 'linear-gradient(135deg, #75CFFF 0%, #5735FD 100%)',
};
