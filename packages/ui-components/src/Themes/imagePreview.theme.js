import { fontFamily } from 'constants/constants';
import themeConstants from './constants';

export const imagePreviewTheme = (theme = 'dark') => {
  return {
    primary: {
      avatarStyles: {
        height: '140px',
        width: '140px',
      },
      buttonStyles: {
        background: themeConstants[theme].colorDarkBlue1,
        color: themeConstants[theme].colorWhite,
        fontFamily: fontFamily.medium,
      },
      iconStyles: {
        color: themeConstants[theme].colorLightGrey,
      },
      styles: {
        background: themeConstants[theme].colorDarkGrey,
        height: '250px',
        width: '250px',
      },
    },
  };
};
