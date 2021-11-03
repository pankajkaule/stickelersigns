import { fontFamily } from 'constants/constants';
import themeConstants from './constants';

export const selectTheme = (theme = 'dark') => {
  return {
    primary: {
      background: themeConstants[theme].colorDarkGrey,
      borderRadius: '5px',
      menuItemColor: themeConstants[theme].colorWhite,
      menuPopupBgColor: themeConstants[theme].colorCardGrey,
      labelColor: themeConstants[theme].colorLightGrey,
      width: '270px',
      height: '40px',
      border: 'none',
      color: themeConstants[theme].colorWhite,
      fontSize: '12px',
      fontFamily: fontFamily.regular,
      lineHeight: '16px',
      padding: '0 0 0 10px',
      menuItemFontSize: '12px',
      menuItemFontFamily: fontFamily.regular,
      menuItemLineHeight: '16px',
      menuPopupMargin: '5px 0',
      menuPopupBorderRadius: '0',
    },
  };
};
