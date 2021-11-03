import { fontFamily } from 'constants/constants';
import themeConstants from './constants';

export const uploaderTheme = (theme = 'dark', font = null) => {
  return {
    primary: {
      acceptedBackgroundColor: themeConstants[theme].colorButtonHoverGrey,
      acceptedBorderColor: themeConstants[theme].borderColor,
      activeBorderColor: themeConstants[theme].borderColor2,
      background: themeConstants[theme].colorDarkGrey,
      borderColor: themeConstants[theme].colorDarkGrey,
      borderRadius: 15,
      borderWidth: 2,
      color: themeConstants[theme].colorLightGrey,
      fontFamily: fontFamily.regular,
      fontSize: '12px',
      height: '350px',
      letterSpacing: 'normal',
      lineHeight: '16px',
      maxHeight: '350px',
      maxWidth: '690px',
      minHeight: '350px',
      minWidth: '690px',
      padding: '0px',
      rejectedBackgroundColor: themeConstants[theme].colorBgRejected,
      textAlign: 'center',
      width: '690px',
    },
  };
};
