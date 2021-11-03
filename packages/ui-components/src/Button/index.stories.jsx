import React from 'react';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    disabledColor: { control: 'color' },
    disabledBgColor: { control: 'color' },
    size: { options: ['large', 'medium', 'small'], control: 'select' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Save & Proceed',
  disabled: false,
  variant: 'contained',
  borderRadius: '5px',
  backgroundColor: '#2E3142',
  color: '#FFFFFF',
  disabledColor: '#3A3C46',
  disabledBgColor: 'transparent',
  disabledBorder: '1px solid #3A3C46',
  padding: '14px 23px 16px',
  onHoverColor: '#67D6FF',
  onHoverBgColor: '#3A3C46',
  type: 'button',
  styles: {},
  height: '40px',
  fontSize: '14px',
  fontFamily: 'Typold Medium',
  lineHeight: '19px',
  onFocusBgColor: '#3A3C46',
  onFocusColor: '#67D6FF',
  onFocusBorder: 'none',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Execution status',
  disabled: false,
  variant: 'contained',
  backgroundColor: 'transparent',
  border: '1px solid #2F3142',
  color: '#8C8C8C',
  disabledColor: '#3A3C46',
  disabledBgColor: 'transparent',
  disabledBorder: '1px solid #3A3C46',
  padding: '10px 20px 11px',
  onHoverColor: '#FFFFFF',
  onHoverBorder: '1px solid #3A3C46',
  onHoverBgColor: '#3A3C46',
  type: 'button',
  styles: {},
  height: '40px',
  fontSize: '12px',
  fontFamily: 'Typold Regular',
  lineHeight: '19px',
  onFocusBgColor: '#3A3C46',
  onFocusColor: '#FFFFFF',
  onFocusBorder: '1px solid #3A3C46',
};

export const Other = Template.bind({});
Other.args = {
  children: 'Refresh',
  disabled: false,
  variant: 'contained',
  backgroundColor: '#2E3036',
  border: 'none',
  color: '#8C8C8C',
  disabledColor: '#3A3C46',
  disabledBgColor: 'transparent',
  disabledBorder: '1px solid #3A3C46',
  padding: '10px 20px 11px',
  onHoverColor: '#FFFFFF',
  onHoverBorder: 'none',
  onHoverBgColor: '#3A3C45',
  type: 'button',
  styles: {},
  height: '40px',
  fontSize: '14px',
  fontFamily: 'Typold Regular',
  lineHeight: '19px',
  onFocusBgColor: 'linear-gradient(135deg, #75CFFF 0%, #5735FD 100%)',
  onFocusColor: '#FFFFFF',
  onFocusBorder: 'none',
};
