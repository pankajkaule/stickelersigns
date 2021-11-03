import React from 'react';
import ImagePreview from '.';

export default {
  title: 'Components/ImagePreview',
  component: ImagePreview,
};

const Template = (args) => {
  const {
    containerWidth,
    containerHeight,
    containerBackground,
    avatarWidth,
    avatarHeight,
    btnColor,
    btnBackground,
    btnFontFamily,
    iconColor,
  } = args;
  return (
    <ImagePreview
      styles={{ width: containerWidth, height: containerHeight, background: containerBackground }}
      buttonTypes={{ color: btnColor, background: btnBackground, fontFamily: btnFontFamily }}
      avatarStyles={{ width: avatarWidth, height: avatarHeight }}
      iconStyles={{ color: iconColor }}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  containerWidth: '250px',
  containerHeight: '250px',
  containerBackground: '#09090A',
  avatarWidth: '140px',
  avatarHeight: '140px',
  btnColor: '#FFF',
  btnBackground: '#2E3142',
  btnFontFamily: 'Typold Medium',
  iconColor: '#8C8C8C',
};
