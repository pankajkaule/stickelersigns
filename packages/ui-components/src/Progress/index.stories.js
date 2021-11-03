import { createTheme, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import Progress from '.';

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    variant: { control: 'select', options: ['determinate', 'query', 'indeterminate', 'buffer'] },
  },
};

const Template = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: 10,
  borderRadius: 5,
  variant: 'determinate',
  value: 50,
  label: 'Storage',
  description: '',
  margin: '10px 0 5px 0',
  width: '270px',
  height: '10px',
  labelColor: '#8C8C8C',
  descriptionColor: '#FFFFFF',
  barColor: '#09090A;',
  color: 'linear-gradient(135deg, #75CFFF 0%, #5735FD 100%)',
};
