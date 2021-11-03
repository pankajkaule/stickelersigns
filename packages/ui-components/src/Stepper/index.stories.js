import React from 'react';
import CustomizedSteppers from '.';

export default {
  title: 'Components/Stepper',
  component: CustomizedSteppers,
};

const Template = (args) => {
  const {
    stepList,
    labelActiveColor,
    iconColor,
    iconBackground,
    activeBackground,
    activeColor,
    completedBackground,
    completedColor,
    stepValue,
  } = args;
  return (
    <CustomizedSteppers
      stepList={stepList}
      stepValue={stepValue}
      styles={{ activeColor: labelActiveColor }}
      iconStyles={{
        color: iconColor,
        background: iconBackground,
        activeBackground,
        activeColor,
        completedBackground,
        completedColor,
      }}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  stepList: ['Select campaign settings', 'Create an ad group', 'Create an ad'],
  labelActiveColor: '#83D4FF',
  iconColor: '#3A3C46',
  iconBackground: '#14151E',
  activeBackground: 'rgb(68,190,255,0.1)',
  activeColor: '#83D4FF',
  completedBackground: 'rgba(0,217,85,0.1)',
  completedColor: '#00D955',
  stepValue: 1,
};
