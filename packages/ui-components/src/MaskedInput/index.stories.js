import React from 'react';
import MaskedInputComponent from '.';

export default {
  title: 'Components/MaskedInput',
  component: MaskedInputComponent,
};

const Template = (args) => <MaskedInputComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  labelColor: '#8C8C8C',
  inputBackgroundColor: '#2F3142',
  inputColor: '#FFFFFF',
  inputWidth: '570px',
  helperTextColor: '#FF003E',
};
