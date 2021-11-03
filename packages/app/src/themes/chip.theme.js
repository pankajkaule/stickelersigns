import { fontFamily } from 'constants/constants';
import themeConstants from './constants';

export const chipTheme = (theme = 'dark') => {
  return {
    primary: {
      background: themeConstants[theme].colorButtonNormalGrey,
      border: 'none',
      borderRadius: '5px',
      color: themeConstants[theme].colorLightGrey,
      deleteIconColor: themeConstants[theme].colorLightGrey,
      deleteIconHeight: '11px',
      deleteIconMargin: '0',
      deleteIconPadding: '0 12px 0 0',
      deleteIconWidth: '11px',
      fontFamily: fontFamily.bold,
      fontSize: '12px',
      labelPadding: '8px 23px 10px 17px',
      lineHeight: '16px',
      onFocusBGColor: themeConstants[theme].colorButtonNormalGrey,
    },
  };
};
