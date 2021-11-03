import React from 'react';
import ConfirmationDialog from './index';

export default {
  title: 'Components/ConfirmationDialog',
  component: ConfirmationDialog,
};

const Template = (args) => <ConfirmationDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  children: 'Save Changes',
  background: '#1A1B1D',
  width: '770px',
  height: '201px',
  borderRadius: '6px',
  borderColor: 'linear-gradient(135deg, #83D4FF 0%, #00A2D4 100%)',
  color: '#fff',
  padding: '40px',
  headerColor: '#FFFFFF',
  contentColor: '#8C8C8C',
  secondaryBtnLabel: 'Undo Changes',
  primaryBtnLabel: 'Save Changes',
};
